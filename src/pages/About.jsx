import { Award, BookOpen, Code, Palette, Users, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import "./About.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const skills = {
    frontend: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 92 },
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MongoDB", level: 85 },
      { name: "GraphQL", level: 82 },
    ],
    tools: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 88 },
      { name: "AWS", level: 85 },
      { name: "CI/CD", level: 87 },
      { name: "Figma", level: 80 },
    ],
  };

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that follows best practices and industry standards.",
    },
    {
      icon: Palette,
      title: "Design Thinking",
      description:
        "Creating intuitive user experiences through thoughtful design and attention to detail.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, efficiency, and exceptional user experience.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working effectively with teams, communicating clearly, and sharing knowledge.",
    },
    {
      icon: Award,
      title: "Quality First",
      description:
        "Delivering high-quality solutions through rigorous testing and code review.",
    },
    {
      icon: BookOpen,
      title: "Continuous Learning",
      description:
        "Staying current with emerging technologies and evolving development practices.",
    },
  ];

  const experience = [
    {
      year: "2021 - Present",
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      description:
        "Lead development of enterprise applications, mentor junior developers, and architect scalable solutions.",
    },
    {
      year: "2019 - 2021",
      role: "Full Stack Developer",
      company: "Digital Solutions Co.",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and cloud technologies.",
    },
    {
      year: "2017 - 2019",
      role: "Frontend Developer",
      company: "Creative Agency",
      description:
        "Created responsive web applications and collaborated with designers to bring concepts to life.",
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div
            className={`about-header ${isVisible ? "animate-fade-in-up" : ""}`}
          >
            <h1>About Me</h1>
            <p className="about-intro">
              Passionate developer with {new Date().getFullYear() - 2017}+ years
              of experience crafting beautiful, functional web applications
            </p>
          </div>
        </div>
      </section>

      <section className="bio-section section">
        <div className="container">
          <div className="bio-grid">
            <div className="bio-image-wrapper">
              <div className="bio-image-placeholder">
                <div className="image-gradient"></div>
              </div>
            </div>

            <div className="bio-content">
              <h2>Hello, I'm a Full Stack Developer</h2>
              <p>
                I specialize in building exceptional digital experiences that
                combine beautiful design with powerful functionality. My journey
                in web development began over five years ago, and I've been
                fortunate to work on diverse projects ranging from startups to
                enterprise applications.
              </p>
              <p>
                My approach is centered on understanding user needs, writing
                clean maintainable code, and delivering solutions that make a
                real impact. I believe in the power of continuous learning and
                staying current with the latest technologies and best practices.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open-source
                projects, writing technical articles, or exploring new
                technologies. I'm always excited to collaborate on interesting
                projects and connect with fellow developers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="value-card">
                  <div className="value-icon-wrapper">
                    <Icon className="value-icon" size={28} />
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-category">
            <h3 className="category-title">Frontend Development</h3>
            <div className="skills-list">
              {skills.frontend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Backend Development</h3>
            <div className="skills-list">
              {skills.backend.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3 className="category-title">Tools & Technologies</h3>
            <div className="skills-list">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section section">
        <div className="container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{exp.year}</div>
                  <h3>{exp.role}</h3>
                  <h4>{exp.company}</h4>
                  <p>{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
