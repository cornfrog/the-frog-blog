import Image from "next/image";
import "../component-styles/About.scss";

const About = () => {
  return (
    <div className="about-page">
        <Image 
          src="/about-image.svg"
          alt="about image"
          height="200"
          width="200"
          className="about-page__image"
        />

      <div className="about-page__message">
        <p >
          Hi there, I&apos;m cornfrog, and welcome to The Frog Blog!
          I’m a full-time web developer with a background in IT
          as a helpdesk technician. I created this blog to share
          updates on my projects, my thoughts on various topics,
          and perhaps a meme or two.
        </p>
        <p>
          Technology has always been a part of my life, and now
          I&apos;m excited to shift from being a lurker to making
          meaningful contributions. Here, you&apos;ll find insights into
          my work, my opinions on current trends, and some lighthearted
          content.
        </p>
        <p>
          Thanks for stopping by, and I hope you enjoy what you find here!
        </p>
      </div>
    </div>
  );
}

export default About;
