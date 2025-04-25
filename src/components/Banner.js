import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import {ArrowRightCircle} from "react-bootstrap-icons"
import bannerImg from "../assets/img/bg-img.svg" 
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import CV from '../assets/docs/CV.pdf';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate=["Web Developer", "Web Designer", "UI/UX Designer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period=2000;

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = CV; 
        link.download = 'Merve_Önalan_Frontend_Developer_CV.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        let ticker=setInterval(()=>{
            tick();
        }, delta)

        return ()=> { clearInterval(ticker)};
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick=()=>{
        let i = loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText =isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length+1)
    
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting&&updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__fadeIn" :""}>
                        {/* <span className="tagline">Welcome to my Portfolio</span> */}
                        <h1>{`Hi, I'm Merve Önalan `}<span className="wrap">{text}</span></h1>
                        <p>Hello, I'm Merve Önalan. Passion in every pixel, innovation in every project. Let's create great things together!</p>
                        <button onClick={handleDownloadCV}>Download CV <ArrowRightCircle size={25} /></button>
                        </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={bannerImg} alt="Merve Önalan" loading="eager"/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
