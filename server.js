require("dotenv").config();

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000,http://127.0.0.1:3000,https://frontend-merve.netlify.app";
const allowedOrigins = CORS_ORIGIN.split(",").map((origin) => origin.trim());
const isProduction = process.env.NODE_ENV === "production";
const smtpUser = process.env.SMTP_USER;
const smtpPass = (process.env.SMTP_PASS || "").replace(/\s+/g, "");

if (!smtpUser || !smtpPass) {
  console.warn("SMTP config missing: set SMTP_USER and SMTP_PASS in .env");
}

app.use(
  cors(
    isProduction
      ? {
          origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
              return callback(null, true);
            }

            return callback(new Error("Not allowed by CORS"));
          },
        }
      : {}
  )
);
app.use(express.json());
app.use("/", router);
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const contactEmail = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

const handleContact = (req, res) => {
  if (!smtpUser || !smtpPass) {
    return res.status(500).json({ message: "SMTP config missing on server." });
  }

  const name = `${req.body.firstName || ""} ${req.body.lastName || ""}`.trim();
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const senderName = name.replace(/[\r\n"]/g, "").trim();

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "Please fill in all the fields!" });
  }

  const mail = {
    from: senderName
      ? `"${senderName} (Portfolio Form)" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`
      : process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
    replyTo: email,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  return contactEmail.sendMail(mail, (error) => {
    if (error) {
      return res.status(500).json({ message: "Message could not be sent." });
    } else {
      return res.status(200).json({ message: "Message Sent" });
    }
  });
};

router.post("/contact", handleContact);
router.post("/api/contact", handleContact);
router.get("/api/health", (_req, res) => {
  return res.status(200).json({ ok: true });
});