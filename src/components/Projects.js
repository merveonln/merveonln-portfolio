import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import artcImg1 from "../assets/img/article-img1.png";
import artcImg2 from "../assets/img/article-img2.png";
import artcImg3 from "../assets/img/article-img3.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ArticleCard } from "./ArticleCard";

export const Projects = () => {

  const projects = [
    {
      title: "Netflix Clone",
      description: "Django",
      imgUrl: projImg1,
      url: "https://merveonalan.pythonanywhere.com/",
    },
    {
      title: "MovieLand",
      description: "React Js & API",
      imgUrl: projImg2,
      url: "https://merveonln-movies.netlify.app/",
    },
    {
      title: "Admin Dashboard",
      description: "React, Material UI, Data Grid, Light & Dark Mode",
      imgUrl: projImg3,
      url: "https://merveonln-admin.netlify.app/",
    },
    {
      title: "Shoppy Dashboard",
      description: "React, Tailwind, Syncfusion, Context API",
      imgUrl: projImg4,
      url: "https://merveonln-shoppy.netlify.app/",
    },
    {
      title: "E-commerce Clone",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg5,
      url: "https://merveonln.github.io/E-commerce-clone/login.html",
    },
    {
      title: "Portfolio",
      description: "React",
      imgUrl: projImg6,
      url: "https://merveonln-portfolio.netlify.app/",
    },
  ];

  const articles = [
    {
      title: "Responsive Tasarım",
      description: "Web Sitelerinizin Her Ekranda Harika Görünmesini Sağlamak İçin 10 İpucu",
      imgUrl: artcImg1,
      url: "https://medium.com/@merveonalan/responsive-tasar%C4%B1m-web-sitelerinizin-her-ekranda-harika-g%C3%B6r%C3%BCnmesini-sa%C4%9Flamak-i%CC%87%C3%A7in-10-i%CC%87pucu-1ee2d733fe4e",
    },
    {
      title: "Performans Optimizasyonu",
      description: "Web Sitelerini Hızlandırma Teknikleri",
      imgUrl: artcImg2,
      url: "https://medium.com/@merveonalan/web-sitesi-performans-optimizasyonu-web-sitelerini-h%C4%B1zland%C4%B1rma-teknikleri-e76464aed1f5",
    },
    {
      title: "Framework Karşılaştırması",
      description: "React, Vue, Angular",
      imgUrl: artcImg3,
      url: "https://medium.com/@merveonalan/javascript-k%C3%BCt%C3%BCphaneleri-ve-frameworkleri-kar%C5%9F%C4%B1la%C5%9Ft%C4%B1rmas%C4%B1-react-vue-angular-410923f3d531",
    },
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              <div>
                <h2>Projects & Articles</h2>
                <p>This section highlights both my web development projects and the articles I’ve written. My projects focus on building efficient and user-friendly solutions, while my Medium articles cover web development, UI/UX design, and tech trends, sharing insights from my experience and learning.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Articles</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          articles.map((article, index) => {
                            return (
                              <ArticleCard
                                key={index}
                                {...article}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}