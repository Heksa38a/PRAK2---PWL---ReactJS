import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./About.css";
import Profile from "../assets/IMG_3369.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
    return (
        <div id="about">
            <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center about-section pb-3">About Me</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                <h3>Hallo Guys, Saya </h3><strong>Heksa Dananjaya (119140057)</strong>
                <hr />
                <br />Saya adalah mahasisiwa smester 6 di Institut Teknologi Sumatera dari prodi Teknik Informatika. Saya Berasal dari Lampung Timur dan saat ini saya berusia 21 tahun.
                <br />
                
                <br/>
                Saya saat ini sedang dalam proses pembelajaran di dunia kuliah, dan semoga bisa lulus tepat waktu.
                <br />
                "Kau tidak perlu menang atau kalah dalam permainan, yang penting adalah kau merasa senang." (Mr. Krab)
                <br />
               
                <br />
                <br /> <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>
                 
                  <div>
                    <a href="https://github.com/Heksa38a" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                 
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
            
        </div>
    );
};

export default About;