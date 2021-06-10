import React from "react";
import img from "../../assets/Yamkela.jpeg";
import { AboutMe } from "../../components";
import { DownloadCVButton } from "../../components/buttons";
import cv from "../../assets/cv/YAMKELA.CV.pdf";
import letter from "../../assets/cv/Yamkela cover letter.pdf";

export default function AboutMeContainer() {
  return (
    <AboutMe>
      <AboutMe.Container>
        <AboutMe.Column>
          <AboutMe.Image src={img} />
        </AboutMe.Column>
        <AboutMe.Column>
          <AboutMe.Heading2>About Me</AboutMe.Heading2>
          <AboutMe.Heading4>
            My name is Yamkela Lungaka Ncangai.
            <AboutMe.Text>
              I was born in the year 2002 on the 8th of January in a small town
              called Matatiele in the Eastern Cape.
            </AboutMe.Text>
            <AboutMe.Text>
              Being raised by my grandmother who acted as both of my parents, I
              never felt alone in the world, and that gave me purpose in life.
            </AboutMe.Text>
            <AboutMe.Text>
              Just like her I aspired to change the world the best way I can. As
              a skilled person, I found my passion for chemistry at a young age,
              and that collaborated with my skills to help me explore the
              chemistry branch as soon as I knew my periodic table.
            </AboutMe.Text>
            <AboutMe.Text>
              That is when the dream of a small boy from the Eastern Cape became
              valid and tangible.
            </AboutMe.Text>
            <AboutMe.Text>
              Since that day I had given myself the responsibility to expand my
              knowledge and gain enough power to own a chemical plant where I
              can train and employ many jobless people and set a name for myself
              and my family.
            </AboutMe.Text>
          </AboutMe.Heading4>
          <AboutMe.Text>
            I am doing Chemical Engineering which is the course i desire the
            most because I am passionate about my work and Because I love what I
            do.
          </AboutMe.Text>
        </AboutMe.Column>
      </AboutMe.Container>
      <AboutMe.Buttons>
        <DownloadCVButton href={cv} target="_blank">
          CV
        </DownloadCVButton>
        <DownloadCVButton href={letter} target="_blank">
          Cover Letter
        </DownloadCVButton>
      </AboutMe.Buttons>
    </AboutMe>
  );
}
