import React from 'react';
import './Projects.css';
import { FaReact } from 'react-icons/fa';
import koficImage from '../assets/koficart.jpg';
import adevImage from '../assets/portfolio.jpg';
import kofieImage from '../assets/kofieats.jpg';
import mgrocImage from '../assets/mygrocerybuddy.jpg';
import kofitImage from '../assets/kofitours.jpg';
import kofiiImage from '../assets/kofiimages.jpg';


const projects = [
    {
        name: 'KofiCart',
        image: koficImage,
        url: 'https://koficart.netlify.app/'
    },
    {
        name: 'KofiImages',
        image: kofiiImage,
        url: ' https://kofiimages.netlify.app/'
    },
    {
        name: 'AdjeiDansoDev(sample portfolio)',
        image:  adevImage,
        url: 'https://adjeidansodev-portfolio.netlify.app/'
    },
    {
        name: 'KofiEats',
        image: kofieImage,
        url: 'https://kofieats.netlify.app/'
    },
    {
        name: 'MyGroceryBuddy',
        image:  mgrocImage,
        url: 'https://adjeidansosgrocerybuddy.netlify.app/'
    },
    {
        name: 'KofiTours',
        image:  kofitImage,
        url: 'https://kofitours.netlify.app/'
    }
];

const Projects = () => {
    return (
        <div className="projects-section">
            <h2>React <FaReact /> Projects</h2>
            <div className="underline"></div>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div key={index} className="project-card" onClick={() => window.open(project.url, '_blank')}>
                        <img src={project.image} alt={project.name} className="project-image" />
                        <div className="project-name">{project.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
