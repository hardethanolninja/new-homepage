import Image from "next/image";
import Link from "next/link";

import SkillUsed from "@/components/SkillUsed";
import ProjectBox from "@/components/ProjectBox";

import jrltoon from "../public/jrltoon.svg";
import githublogo from "../public/iconmonstr-github-3.svg";
import gmaillogo from "../public/iconmonstr-gmail-3.svg";
import linkedinlogo from "../public/iconmonstr-linkedin-3.svg";

import npsotNew from "../public/npsot/npsot-new.png";

const freelancerSkills = ["React", "NextJS", "TailwindCSS"];
const npsotSkills = [
  "WordPress",
  "PHP",
  "SQL",
  "Elementor",
  "JavaScript",
  "CSS",
];

const languages = '"HTML", "CSS", "JavaScript", "PHP", "Python", "SQL"';
const frameworks = '"React", "Node.js", "jQuery", "Next.js", "WordPress"';
const interests = '"Mountain Biking", "Camping", "Music", "Strategy Games"';

const projects = [
  {
    title: "Native Plant Society of Texas Website Redesign",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: npsotNew,
    technologies: ["WordPress", "PHP", "SQL", "Elementor", "JavaScript", "CSS"],
    link: "/projects/npsot",
  },
  {
    title: "Project 2",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: npsotNew,
    technologies: ["Vue.js", "SCSS", "Webpack"],
    link: "/projects/npsot",
  },
];

export default function Home() {
  return (
    <main className='grid grid-cols-2 gap-4'>
      <section className='fixed top-0 grid w-1/3 h-full place-content-center'>
        <div className='flex flex-col mx-8'>
          <div className='flex flex-col place-content-center'>
            <p className='pb-10'>Elevate your project with me!</p>
            <button className='px-4 py-2 font-bold text-white rounded bg-dark-blue hover:bg-dark-green'>
              Let's work together!
            </button>
            <div className='flex flex-row pt-4 place-content-around'>
              <div className='flex items-center justify-center w-12 h-12 rounded-md cursor-pointer bg-dark-blue hover:bg-dark-green'>
                <Link
                  target='_blank'
                  alt='linkedin'
                  href='https://www.linkedin.com/in/jonathan-lienhard/'
                >
                  <Image src={linkedinlogo} />
                </Link>
              </div>
              <div className='flex items-center justify-center w-12 h-12 rounded-md cursor-pointer bg-dark-blue hover:bg-dark-green'>
                <Link
                  target='_blank'
                  alt='github'
                  href='https://github.com/hardethanolninja/'
                >
                  <Image src={githublogo} />
                </Link>
              </div>
              <div className='flex items-center justify-center w-12 h-12 rounded-md cursor-pointer bg-dark-blue hover:bg-dark-green'>
                <Link alt='email' href='mailto:jon@lienhard.dev'>
                  <Image src={gmaillogo} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='absolute right-0 w-2/3 h-screen mx-8'>
        <div className='h-screen place-content-center' id='home'>
          <div className='flex flex-col h-full place-content-center'>
            <h1 className='mb-4'>Hello! I'm Jon.</h1>
            <h2 className='mb-4'>I write code and develop websites.</h2>
            <p className='mr-8 text-wrap'>
              I'm a software developer located in San Antonio specializing in
              building (and occasionally designing) exceptional digital
              experiences.
            </p>
          </div>
        </div>
        <div className='h-screen rounded-md bg-dark-blue' id='about'>
          <div className='p-8'>
            <h2>About Me</h2>
            <p>
              Hello! I'm a developer & problem solver based in Texas. I enjoy
              creating things and specialize in both front-end and back-end
              technologies.
            </p>
            <div>
              <div className='p-8 font-mono text-white rounded-lg '>
                <div className='p-2 bg-gray-800 rounded-t-lg'>
                  <div className='flex items-center'>
                    <div className='w-3 h-3 mr-2 bg-red-500 rounded-full'></div>
                    <div className='w-3 h-3 mr-2 bg-yellow-400 rounded-full'></div>
                    <div className='w-3 h-3 mr-2 bg-green-500 rounded-full'></div>
                  </div>
                </div>
                <pre className='p-3 bg-black rounded-b-lg'>
                  <code className='text-orange-500 highlighter'>
                    {"{"} <br />
                    <span className='key'>"name"</span>:{" "}
                    <span className='value'>"Jon Lienhard"</span>, <br />
                    <span className='key'>
                      "location": <br />
                    </span>
                    {"    "}
                    {"{"} <br />
                    {"    "}
                    <span className='key'>"city"</span>:{" "}
                    <span className='value'>"San Antonio"</span>, <br />
                    {"    "}
                    <span className='key'>"state"</span>:{" "}
                    <span className='value'>"Texas"</span> <br />
                    {"    "}
                    {"},"} <br />
                    <span className='key'>"email"</span>:{" "}
                    <span className='underline value'>
                      <a href='mailto:jon@lienhard.dev'>"jon@lienhard.dev"</a>
                    </span>
                    ,
                    <br />
                    <span className='key'>"social media"</span>: <br />
                    {"    "}
                    {"{"} <br />
                    {"    "}
                    <span className='key'>"github"</span>:{" "}
                    <span className='underline value'>
                      <a href='https://github.com/hardethanolninja'>
                        "@hardethanolninja"
                      </a>
                    </span>
                    , <br />
                    {"    "}
                    <span className='key'>"linkedin"</span>:{" "}
                    <span className='underline value'>
                      <a href='https://www.linkedin.com/in/jonathan-lienhard/'>
                        "jonathan-lienhard"
                      </a>
                    </span>{" "}
                    <br />
                    {"    "}
                    {"},"} <br />
                    <span className='key'>"languages"</span>: <br />
                    {"    "}
                    {"["}
                    <br />
                    <span className='value text-wrap'>
                      {"     "}
                      {languages.split(",").map((word, index) => (
                        <span key={index}>
                          {word}
                          {index !== languages.split(",").length - 1 && (
                            <span className='highlight'>,</span>
                          )}
                        </span>
                      ))}
                    </span>{" "}
                    <br />
                    {"    "}
                    {"],"} <br />
                    <span className='key'>"libraries & frameworks"</span>:{" "}
                    <br />
                    {"    "}
                    {"["}
                    <br />
                    <span className='value text-wrap'>
                      {"     "}
                      {frameworks.split(",").map((word, index) => (
                        <span key={index}>
                          {word}
                          {index !== frameworks.split(",").length - 1 && (
                            <span className='highlight'>,</span>
                          )}
                        </span>
                      ))}
                    </span>{" "}
                    <br />
                    {"    "}
                    {"],"} <br />
                    <span className='key'>"interests"</span>: <br />
                    {"    "}
                    {"["}
                    <br />
                    <span className='value text-wrap'>
                      {"     "}
                      {interests.split(",").map((word, index) => (
                        <span key={index}>
                          {word}
                          {index !== interests.split(",").length - 1 && (
                            <span className='highlight'>,</span>
                          )}
                        </span>
                      ))}
                    </span>{" "}
                    <br />
                    {"    "}
                    {"],"} <br />
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
        <div className='h-screen' id='work'>
          <div className='p-8'>
            <h2 className='mb-8'>Work History</h2>
            <div className='p-4 border-b-4 border-dark-blue'>
              <h3 className='mb-4 text-dark-green'>Freelancer</h3>
              <h5 className='mb-4 text-gray-500'>2023-Present</h5>
              <p className='mb-4 text-lg'>
                I have continued my focus on mastering web development through
                self-study and freelance projects. I have worked mostly with
                JavaScript and PHP to help customize and enhance existing web
                projects. For my own projects, I have been focusing on Next.js
                and back-end development.
              </p>
              <ul className='ml-4 list-disc'>
                <li className='text-md'>Thing I did</li>
                <li className='text-md'>Thing I did</li>
                <li className='text-md'>Thing I did</li>
              </ul>
              <div className='flex flex-row'>
                {freelancerSkills.map((skill, index) => (
                  <SkillUsed key={index} skill={skill} />
                ))}
              </div>
            </div>
            <div className='p-4 border-b-4 border-dark-green'>
              <h3 className='mb- text-dark-blue'>Web Developer - Wordpress</h3>
              <h5 className='mb-4 text-gray-500'>2022-2023</h5>
              <p className='mb-4 text-lg'>
                This position was a 12-month volunteer role at a nonprofit
                organization, where I led the development and launch of their
                new website. This project was an invaluable opportunity to apply
                my skills in a real-world setting, enhancing my ability to
                manage projects, collaborate with team members, and meet user
                needs effectively.
              </p>
              <ul className='ml-4 list-disc'>
                <li className='text-md'>
                  Led the development & launch of new website with 50K monthly
                  views
                </li>
                <li className='text-md'>
                  Managed user groups, providing custom solutions to various
                  requirements
                </li>
                <li className='text-md'>
                  Provided onboarding and training for content creators
                </li>
              </ul>
              <div className='flex flex-row flex-wrap'>
                {npsotSkills.map((skill, index) => (
                  <SkillUsed key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className='h-screen p-4 mb-8 rounded-md bg-dark-green'
          id='projects'
        >
          <h2 className='mb-8 text-gray-800'>Selected Projects</h2>
          {projects.map((project, index) => (
            <ProjectBox
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
