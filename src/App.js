import './App.css';
import volunteer from "./assets/volunteer.jpeg";
import { FaFacebook, FaTwitterSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  const volun = {
    image: volunteer,
    name: "WhatSoEver",
    designation: "Member",
    desc: "loremscnakjdncsndvnlksdkvnkjsdnvkdsvksndvkjnskjdvkjsdvusiudvjdsvmbdsasdbkjasdlkasoidaosdlksa"
  };

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="position-relative image">
        <img src={volun.image} className="card-img-top " alt="..." />
        <div className="social-icons">
          <a href="#!" className="social-icon"><FaFacebook /></a>
          <a href="#!" className="social-icon"><FaTwitterSquare /></a>
          <a href="#!" className="social-icon"><FaInstagram /></a>
          <a href="#!" className="social-icon"><FaLinkedin /></a>
        </div>
      </div>
      <div className="card-body">
        <a href="#!"><h5 className="card-title">{volun.name}</h5></a>
        <p className="card-text">{volun.designation}</p>
        <p className="card-text">{volun.desc}</p>
      </div>
    </div>
  );
}

export default App;
