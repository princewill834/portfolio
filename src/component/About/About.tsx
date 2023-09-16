import React, { useEffect } from "react";
import "./About.scss";
import { IoMdDownload } from "react-icons/io";
import ProgressBar from "react-bootstrap/ProgressBar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { squareVariants } from "../../varients";
const pdf = require("../../assests/Resume/Front_end_Developer.pdf");

export default function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      id="about"
      variants={squareVariants}
      animate={controls}
      ref={ref}
      initial="hidden"
    >
      <div className="about-text">
        <h1 className="header">
          <span style={{ color: "#6ff4a5" }}>01.</span> About Me
        </h1>
      </div>
      <div className="container container-about">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-about">
            <h1>
              Hello,
              <br />
              World.
            </h1>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 about2"
            // style={{ border: "1px solid yellow" }}
          >
            <div className="img-text">
              <h1>
                Hello! I'm <span style={{ color: "#6ff4a5" }}>Kelechi</span>
                <br />
                Princewill Ekwuluonu
              </h1>
              <p>
                I'm a passionate and dedicated Full Stack Developer at Divine Grace Technology. 
                I thrive on transforming ideas into innovative and scalable digital solutions. 
                With a strong background in software development,
                I am committed to delivering high-quality software that meets both user needs 
                and business objectives.<br />
                <br />
                <h3>My Journey</h3>

                My journey in the world of software development began with a curiosity to explore the endless 
                possibilities of code. Over the years, I've had the privilege of working on a wide range of projects, 
                from crafting elegant front-end interfaces to building robust back-end systems.
                Each project has been an opportunity to learn, grow, and refine my skills.
                <br />
              </p>
              <section className="skills">
                <h3>Skills</h3>
                <div>
                  <div className="skill-span">
                    <span>HTML</span>
                    <span>100%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={100}
                    label={`${100}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>CSS3</span>
                    <span>80%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={80}
                    label={`${80}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>Bootstrap</span>
                    <span>80%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={80}
                    label={`${80}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>Javascript</span>
                    <span>80%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={80}
                    label={`${80}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>React</span>
                    <span>75%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={75}
                    label={`${77}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>Typescript</span>
                    <span>70%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={70}
                    label={`${70}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>Redux</span>
                    <span>60%</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={60}
                    label={`${60}%`}
                    visuallyHidden
                  />
                </div>
                <div>
                  <div className="skill-span">
                    <span>Nodejs</span>
                    <span>70</span>
                  </div>

                  <ProgressBar
                    className="progress progress-sm"
                    variant="success"
                    now={70}
                    label={`${70}%`}
                    visuallyHidden
                  />
                </div>
                <br/>
                <h3>Let's Connect</h3>

                I am always eager to collaborate on exciting projects, share knowledge, 
                and explore new opportunities. If you have a project in mind or just want to connect, 
                please don't hesitate to reach out. I look forward to hearing from you and working together 
                to bring your ideas to life.

                <p>Thank you for visiting my website and taking the time to get to know me. Let's embark on this 
                  journey of innovation and excellence together.</p>
              </section>
              {/* <div className="about-button">
                <button type="button" className="btn btn-success">
                  <a href="https://github.com/simpa007?tab=repositories">
                    VIEW WORK
                  </a>
                </button>


              </div> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
