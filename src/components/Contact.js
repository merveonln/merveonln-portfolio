import { useState } from "react";
import { Container, Row, Col, Toast} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [showToast, setShowToast] = useState(false);

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowToast(false);
    
    if (
      !formDetails.firstName.trim() ||
      !formDetails.lastName.trim() ||
      !formDetails.email.trim() ||
      !formDetails.phone.trim() ||
      !formDetails.message.trim()
    ) {
      setStatus({ success: false, message: "Please fill in all the fields!" });
      setShowToast(true);
      return;
    }

    setButtonText("Sending...");
    
    const templateParams = {
      from_name: `${formDetails.firstName} ${formDetails.lastName}`,
      email: formDetails.email,
      phone: formDetails.phone,
      message: formDetails.message,
    };

    emailjs.send(
      "service_655evuj", 
      "template_ausbghu", 
      templateParams,
      "p-Z2oRS4uIgrb2zCn" 
    )
    .then((response) => {
      setStatus({ success: true, message: "Message sent successfully!" });
      setButtonText("Send");
      setFormDetails(formInitialDetails); 
      setShowToast(true);
    })
    .catch((error) => {
      setStatus({ success: false, message: "Something went wrong, please try again later..." });
      setButtonText("Send");
      setShowToast(true);
    });
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
                <img src={contactImg} alt="Contact Us"/>
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
                <div>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <div className="toast-wrapper mt-3">
                    <Toast 
                      onClose={() => setShowToast(false)} 
                      show={showToast} 
                      delay={3000} 
                      autohide 
                      bg={status.success ? "success" : "danger"}
                    >
                      <Toast.Header>
                        <strong className="me-auto">{status.success ? "Successfully" : "Error"}</strong>
                      </Toast.Header>
                      <Toast.Body>{status.message}</Toast.Body>
                    </Toast>
                  </div>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={12} className="px-1 text-center">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button className="btn-send" type="submit"><span>{buttonText}</span></button>
                    </Col> 
                  </Row>
                </form>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}