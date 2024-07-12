import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const sampleProjects = [
        {
            _id: '1',
            title: 'Personal Portfolio Website',
            description: 'A responsive personal portfolio website showcasing my skills, projects, and contact information. Built with React and CSS.',
            link: 'https://yourportfolio.com'
        },
        {
            _id: '2',
            title: 'E-commerce Platform',
            description: 'A full-featured e-commerce platform with user authentication, product listings, and a shopping cart. Built with MERN stack.',
            link: 'https://ecommerceplatform.com'
        },
        {
            _id: '3',
            title: 'Chat Application',
            description: 'A real-time chat application with WebSocket integration, allowing users to create rooms and send messages. Built with Node.js, Express, and React.',
            link: 'https://chatapplication.com'
        },
        {
            _id: '4',
            title: 'Weather Dashboard',
            description: 'A weather dashboard providing current weather information and forecasts for various cities. Built with React and the OpenWeatherMap API.',
            link: 'https://weatherdashboard.com'
        },
        {
            _id: '5',
            title: 'Task Manager',
            description: 'A task management application allowing users to create, update, and delete tasks. Built with React, Node.js, and MongoDB.',
            link: 'https://taskmanager.com'
        }
    ];

    return (
        <div>
            <h1>Projects</h1>
            <div className="projects-list">
                {sampleProjects.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
