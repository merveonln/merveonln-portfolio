import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import servicesImg1 from "../assets/img/services-img1.png"
import servicesImg2 from "../assets/img/services-img2.png"
import servicesImg3 from "../assets/img/services-img3.png"
import servicesImg4 from "../assets/img/services-img4.png"

export const Services = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className="skill" id="services">
        <Container>
            <Row>
                <Col>
                    <div className="skill-bx">
                        <h2>
                            Services
                        </h2>
                        <p>I focus on creating dynamic and user-friendly web applications using modern web technologies. My expertise includes front-end development, UI/UX design, and graphic design. I work with various frameworks and tools to deliver visually appealing and functional websites.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={servicesImg1} alt="Web Development" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={servicesImg2} alt="Logo Design" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={servicesImg3} alt="Graphic Design" />
                                <h5>Graphic Design</h5>
                            </div>
                            <div className="item">
                                <img src={servicesImg4} alt="Social Media Management" />
                                <h5>Social Media Management</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}