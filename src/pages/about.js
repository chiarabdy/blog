import React from 'react';
import styled from 'styled-components';

// This path assumes your assets folder is at 'src/assets/'
import profilePic from '../assets/images/profile-photo.png'; 

const AboutPageWrapper = styled.div`
  background-color: #ffffff;
  color: #333;
  padding: 60px 20px;
  min-height: calc(100vh - 160px); /* Ensures it fills the screen height between header and footer */
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #e0e0e0;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
`;

const AboutText = styled.div`
  text-align: left;
  max-width: 600px;
  line-height: 1.8;

  h1 {
    font-size: 2.5rem;
    color: #1a1a2e;
    margin-bottom: 20px;
  }

  p {
    margin-bottom: 15px;
    font-size: 1.1rem;
  }

  strong {
    color: #0079bf;
  }
`;

export default function AboutPage() {
  return (
    <AboutPageWrapper>
      <ContentWrapper>
        <ProfileImage src={profilePic.src} alt="Chiar Abdi" />
        <AboutText>
          <h1>About Me</h1>
          <p>
            I'm a developer driven by a deep-seated passion for problem-solving and technology. My journey into tech was fueled by a love for logical challenges, which I first honed while earning my Bachelor's degree in English Literature from Damascus University.
          </p>
          <p>
            That background gave me a unique perspective, blending analytical thinking with strong communication skills—essential for writing clear documentation and collaborating effectively. This path led me to incredible hands-on software engineering internships at <strong>Adobe</strong> and <strong>Archilogic</strong>, and a role as an IT Support Assistant at <strong>KUNIGO</strong>.
          </p>
          <p>
            I am now eager to fully re-engage with my passion for software development and contribute my skills to building innovative and impactful applications.
          </p>
        </AboutText>
      </ContentWrapper>
    </AboutPageWrapper>
  );
}