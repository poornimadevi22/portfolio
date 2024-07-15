import React from 'react';
import styled from 'styled-components';
import {ReactTyped as Typed} from 'react-typed';
import Section from '../components/Section';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faReact, faNodeJs, faCss3Alt, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faComments, faPuzzlePiece, faUsers, faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    display: block;
    border: 3px solid #fff;
`;

const IntroText = styled.div`
    margin: 2rem 0;
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
`;

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    justify-items: center;
`;

const SkillItem = styled.div`
    margin: 0.5rem 0;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
`;

const SkillRating = styled.span`
    color: gold;
    margin-left: 0.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-right: 0.5rem;
`;

const ProjectCard = styled.div`
    border: 1px solid #ddd;
    background: #fff;
    margin: 1rem;
    padding: 1rem;
    width: calc(33% - 2rem);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2rem 0;
`;

const SectionBackground = styled.div`
    background: ${(props) => props.bgGradient || 'transparent'};
    padding: 4rem 0;
    color: ${(props) => props.color || '#000'};
`;

const ContactContainer = styled.div`
    text-align: center;
    font-size: 1.2rem;
`;

const ContactItem = styled.div`
    margin: 1rem 0;
`;

const Home = () => {
    const sampleProjects = [
        {
            _id: '1',
            title: 'Foodies webpage',
            description: 'A responsive personal portfolio website showcasing my skills, projects, and contact information. Built with React and CSS.',
            link: 'https://silver-peony-c83679.netlify.app/',
            // link:'https://foodies-webpage.onrender.com'
        },
        {
            _id: '2',
            title: 'Login/Registration with Authentication',
            description: 'Manage your shopping items efficiently with our Redux-powered cart system. Built with MERN stack.',
            link: 'https://github.com/poornimadevi22/express-JWTauth'
        },
        {
            _id: '3',
            title: 'Book Management System',
            description: 'This repository houses a Book Management System, employing CRUD operations for efficient handling of book data. ',
            link: 'https://github.com/poornimadevi22/BookManagementSystem/tree/main'
        },
        {
            _id: '4',
            title: 'Todo list Application',
            description: 'A simple list app to keep you organized and productive.',
            link: 'https://calm-platypus-a3b344.netlify.app/'
        },
        {
            _id: '5',
            title: 'Creative registration form',
            description: 'A creative form built with responsive design.',
            link: 'https://cozy-squirrel-4cafda.netlify.app/'
        }
    ];

    const technicalSkills = [
        { skill: 'JavaScript', rating: 5, icon: faJs },
        { skill: 'React', rating: 5, icon: faReact },
        { skill: 'Node.js', rating: 4, icon: faNodeJs },
        { skill: 'MongoDB', rating: 3, icon: faDatabase },
        { skill: 'CSS', rating: 4, icon: faCss3Alt },
        { skill: 'HTML5', rating: 5, icon: faHtml5 },
    ];

    const professionalSkills = [
        { skill: 'Communication', rating: 5, icon: faComments },
        { skill: 'Problem-Solving', rating: 5, icon: faPuzzlePiece },
        { skill: 'Teamwork', rating: 5, icon: faUsers },
        { skill: 'Creativity', rating: 4, icon: faClock },
    ];

    const renderSkills = (skills) => skills.map(({ skill, rating, icon }) => (
        <SkillItem key={skill}>
            <Icon icon={icon} size="2x" />
            {skill}
            <SkillRating>
                {'★'.repeat(rating)}
                {'☆'.repeat(5 - rating)}
            </SkillRating>
        </SkillItem>
    ));

    return (
        <div>
            <SectionBackground bgGradient="linear-gradient(135deg, #72EDF2 10%, #5151E5 100%)" color="#fff" id="home">
                <Section>
                    <ProfileImage src="WhatsApp Image 2024-07-14 at 23.45.18_8d1513a9.jpg" alt="Profile" />
                    <IntroText>
                        
                         Poorni Suresh,<br /> I'm <Typed strings={['a Full Stack Developer','both FrontEnd and Backend Developer', 'a Problem Solver', 'a Lifelong Learner']} typeSpeed={40} backSpeed={50} loop />
                         </IntroText>
                </Section>
            </SectionBackground>
            <SectionBackground bgGradient="linear-gradient(135deg, #FF9A8B 0%, #FF6A88 55%, #FF99AC 100%)" color="#000" id="about">
                <Section>
                    <h1>About Me</h1>
                    <p>
                        I am a passionate Full Stack Developer with experience in building web applications using modern technologies.
                        I love solving complex problems and continuously improving my skills. My goal is to create scalable and efficient applications.Dedicated and motivated professional with a background in optometry, aiming to pivot into a software
                developer role with a focus on JavaScript and web development.
                am looking for a challenging and dynamic environment where I can leverage my skills and expertise to
                contribute to innovative projects. I am particularly interested in a role that allows me to work on
                end-to-end development using the MERN stack, as I thrive in creating seamless and responsive
                applications.
                
                    </p>
                </Section>
            </SectionBackground>
            <SectionBackground bgGradient="linear-gradient(135deg, #F6D242 10%, #FF52E5 100%)" color="#000" id="technical-skills">
                <Section>
                    <h1>Technical Skills</h1>
                    <SkillsContainer>
                        {renderSkills(technicalSkills)}
                    </SkillsContainer>
                </Section>
            </SectionBackground>
            <SectionBackground bgGradient="linear-gradient(135deg, #A1FFCE 10%, #FAFFD1 100%)" color="#000" id="professional-skills">
                <Section>
                    <h1>Professional Skills</h1>
                    <SkillsContainer>
                        {renderSkills(professionalSkills)}
                    </SkillsContainer>
                </Section>
            </SectionBackground>
            <SectionBackground bgGradient="linear-gradient(135deg, #FFD3A5 10%, #FD6585 100%)" id="projects">
                <Section>
                    <h1>Projects</h1>
                    <ProjectsContainer>
                        {sampleProjects.map(project => (
                            <ProjectCard key={project._id}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                            </ProjectCard>
                        ))}
                    </ProjectsContainer>
                </Section>
            </SectionBackground>
            <SectionBackground bgGradient="linear-gradient(135deg, #5EFCE8 10%, #736EFE 100%)" color="#fff" id="contact">
                <Section>
                    <h1>Contact Me</h1>
                    <ContactContainer>
                        <ContactItem>
                            <Icon icon={faEnvelope} />poorni.jerry22@gmail.com
                        </ContactItem>
                        <ContactItem>
                            <Icon icon={faPhone} /> 9498499683
                        </ContactItem>
                    </ContactContainer>
                </Section>
            </SectionBackground>
        </div>
    );
};

export default Home;