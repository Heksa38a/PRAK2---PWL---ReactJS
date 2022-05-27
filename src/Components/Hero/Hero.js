import React from "react";
import { Container } from "react-bootstrap";
import Typed from "react-typed";
import my from "../assets/IMG_3369.jpg";
import Button from 'react-bootstrap/Button';
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <div className="hero-content">
          <div className="person-img">
            <img src={my} alt="" />
          </div>
          <h1 className="title">Hello, Saya Heksa Dananjaya</h1>
          <h3 className="subtitle">
            <Typed strings={["Seorang Mahasiswa", "Institut Teknologi Sumatera", "Teknik Informatika"]} typeSpeed={60} backSpeed={40} backDelay={1500} smartBackspace loop></Typed>
          </h3>
         
        </div>
      </Container>
    </section>
  );
};

export default Hero;
