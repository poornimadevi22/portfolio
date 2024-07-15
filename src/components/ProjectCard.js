// src/components/ProjectCard.jsx
import React from 'react';
import '../App.css'

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card" style={{ background: project.bggradient }}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
};

export default ProjectCard;
