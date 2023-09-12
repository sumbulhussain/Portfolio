import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>Get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:sumbul053btmae20@igdtuw.ac.in"
          data-hover="Let's talk!"
        >
   
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader></ContactHeader>
          <ContactLink href="tel:+91 981077">Phone</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader></ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/sumbulhussain"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/sumbul-hussain-55905a210/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader></ContactHeader>
          <ContactLink href="">
          sumbul053btmae20@igdtuw.ac.in
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{" "}
          <Small
            href="https://github.com/mugambi645"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sumbul
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
