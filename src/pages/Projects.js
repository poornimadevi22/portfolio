// src/pages/Projects.jsx
import React from 'react';
import Slider from 'react-slick';
import ProjectCard from '../components/ProjectCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';

const Projects = () => {
    const sampleProjects = [
        {
            _id: '1',
            title: 'Full stack project',
            description: 'Discover delicious vegan recipes and restaurants with Vegnar Foodies. Built with React and CSS.',
            link: 'https://silver-peony-c83679.netlify.app/'
        },
        {
            _id: '2',
            title: 'Login/Registration with Authentication',
            description: 'Manage your shopping items efficiently with our Redux-powered cart system. Built with MERN stack.',
            link: 'https://github.com/poornimadevi22/express-JWTauth'
        },
        {
            _id: '3',
            title: 'Todo list Application',
            description: 'A simple list app to keep you organized and productive.',
            link: 'https://calm-platypus-a3b344.netlify.app/'
        },
           
        {
            // _id: '5',
            // title: 'Creative registration form',
            // description: ' Shopping cart application built with React and Redux, emphasizing the unidirectional flow of data and centralized state management. It integrated with backend services, allowing seamless handling of product catalog, user interactions, and state persistence.',
            // link: 'https://cozy-squirrel-4cafda.netlify.app/'
        },
        {
            _id: '6',
            title: 'Creative registration form',
            description: 'A creative form built with responsive design.',
            link: 'https://cozy-squirrel-4cafda.netlify.app/'
        }

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };

    return (
        <div>
            <h1>Projects</h1>
            <Slider {...settings} className="projects-slider">
                {sampleProjects.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </Slider>
        </div>
    );
};

export default Projects;
