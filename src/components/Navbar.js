import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
    background: #333;
    padding: 1rem;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    text-align: right;
    z-index: 1000;
`;

const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: flex-end;
`;

const Li = styled.li`
    margin: 0 1rem;
`;

const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    &:hover {
        background: #575757;
        border-radius: 5px;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Ul>
                <Li><NavLink href="#home">Home</NavLink></Li>
                <Li><NavLink href="#about">About</NavLink></Li>
                <Li><NavLink href="#technical-skills">Technical Skills</NavLink></Li>
                <Li><NavLink href="#professional-skills">Professional Skills</NavLink></Li>
                <Li><NavLink href="#projects">Projects</NavLink></Li>
                <Li><NavLink href="#contact">Contact</NavLink></Li>
            </Ul>
        </Nav>
    );
};

export default Navbar;
