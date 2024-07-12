import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
    padding: 4rem 2rem;
    text-align: center;
`;

const Section = ({ id, children }) => {
    return (
        <SectionContainer id={id}>
            {children}
        </SectionContainer>
    );
};

export default Section;
