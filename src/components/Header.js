import React from 'react';
import './Header.css'; // We'll create the styles for this component next
import headerImage from '../assets/eadphoto.jpg';
import { FaReact } from 'react-icons/fa';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h1>Welcome to My React <FaReact />  Projects</h1>
                <p>
                  Explore my  <span className="highlight">React</span> projects – a diverse showcase of dynamic, interactive web applications that highlight my skills in building modern, responsive user interfaces and seamless user experiences with React.
                </p>
                <button className="cta-button">#CODINGTOIMPROVETHEWORLD</button>
            </div>
            <div className="header-image">
                <img src={headerImage} alt="headerpic" />
            </div>
        </div>
    );
};

export default Header;
