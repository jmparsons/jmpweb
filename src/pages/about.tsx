import React from 'react';
import { Helmet } from 'react-helmet';
import { Layout } from '../components/Layout';
import { Content } from '../components/Content';
import {
  AboutImage,
  AboutCon,
  AboutGrid,
  AboutContent,
} from '../components/UI/AboutUI';
import train from '../assets/images/train.gif';

export default () => (
  <Layout>
    <Helmet title="About" />
    <Content>
      <AboutCon>
        <AboutGrid>
          <AboutContent>
            <h1>About</h1>
            <p>
              JMParsons is founded by web developer and designer Jonathan M.
              Parsons. Jon has a strong background in art and design with a vast
              portfolio including sketches, drawings, and 3D rendered computer
              generated images. Along with a talent for the visual, Jon is an
              equally competent and capable developer and programmer. His work
              includes programming in several different languages, optimizing
              site performance and maintenance, and developing new and dynamic
              tools, which enhance the functionality of a site and a user's
              browsing experience.
            </p>
            <p>
              In an increasingly competitive field, Jon has managed to stay well
              ahead of the curve by continuously learning and cultivating his
              passion for design and development. He has a thorough
              understanding of modern web design and function as well as
              creating and developing coding methods for optimum performance.
              Clients can expect JMParsons to deliver a website, IT tools, and
              enterprise solutions from inception to launch and maintenance.
            </p>
            <h2>Mission</h2>
            <p>
              Our mission is to exceed our client's expectations regardless of
              the scope of the project. Whether it is a website for a small
              company or a large corporation, we intend to deliver the highest
              possible quality and solutions for every demand the client faces.
              JMParsons will ensure that the client is thoroughly accommodated
              and that the transitions from inception, design, development,
              launch, and maintenance will be smooth and hassle-free for the
              client.
            </p>
          </AboutContent>
          <AboutImage>
            <img src={train} width="360" height="639" />
          </AboutImage>
        </AboutGrid>
      </AboutCon>
    </Content>
  </Layout>
);
