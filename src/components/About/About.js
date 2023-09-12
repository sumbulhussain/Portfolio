import React from "react";
import {
  AboutContent,
  AboutDetailsContainer,
  AboutImage,
  AboutImageContainer,
  Resume,
  ResumeLink,
  StyledAbout,
} from "../styles/About.styled";
import { SectionHeading, SectionTitle } from "../styles/SectionHeading";
import { StyledParagraph } from "../styles/Typography.styled";
import myImage from "../../assets/my-image.jpg";
import downloadIcon from "../../assets/icons/download-icon.svg";
import resume from "../../assets/Resume.pdf";

const About = () => {
  return (
    <StyledAbout id="about">
      <SectionHeading dark="true" mb="3rem">
        <SectionTitle dark="true" number="02">
          About Me
        </SectionTitle>
      </SectionHeading>
      <AboutContent>
        <AboutImageContainer>
          
          <AboutImage src={myImage} />
        </AboutImageContainer>
        <AboutDetailsContainer>
          <StyledParagraph>
           My name is Sumbul Hussain. I am pursuing B.Tech in MAE from IGDTUW.
           </StyledParagraph>
           <StyledParagraph>
           Technical Skills :
           </StyledParagraph>
           <StyledParagraph>
           Languages: C++(Proficient), C, Javascript, SQL.
           
           Tools/Frameworks: VS Code, Git, Github, React.Js, Node.Js, Express.Js, 
           Spark Ar studio, Android Studio, CodeSandbox, Mongo.
          </StyledParagraph>
          <StyledParagraph>
           I learned WebD from <a href="https://internshala.com/">Internshala</a> online platform where I enrolled in web development course.
           </StyledParagraph>
           <StyledParagraph>
           I learned AppD from <a href="https://www.unschool.in/">Unschool</a> online platform where I enrolled in app development course.
           </StyledParagraph>
          <StyledParagraph>
            I am a frontend developer and also love to solve DSA problems.
          I love to create beautiful and responsive solutions.
          </StyledParagraph>
      
          <Resume>
            <ResumeLink
              href={resume}
              icon={downloadIcon}
              download="resume-jericho-bantiquete"
            >
              Download Resume
            </ResumeLink>
          </Resume>
        </AboutDetailsContainer>
      </AboutContent>
    </StyledAbout>
  );
};

export default About;
