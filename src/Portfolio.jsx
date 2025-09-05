import { useState } from "react";
import "./Portfolio.css";
import dog1 from  "./assets/Dog1.jpg"
import dog2 from  "./assets/Dog2.jpg"
import dog3 from  "./assets/Dog3.jpg"
import dog4 from  "./assets/Dog4.jpg"
import dog5 from  "./assets/Dog5.jpg"
import dog6 from  "./assets/Dog6.jpg"
import { SocialIcon } from 'react-social-icons'




export default function Portfolio() {
    const [selectedProject, setSelectedProject] = useState(null);
    const Component = <SocialIcon url="https://twitter.com" />

    const projects = [
        {
            id: 1,
            title: "Cool Project 1",
            image: dog2,
            description: "This is a short description of Project 1.",
            details: "Here you can add more information about Project 1."
        },
        {
            id: 2,
            title: "Cool Project 2",
            image: dog3,
            description: "This is a short description of Project 2.",
            details: "Here you can add more information about Project 2."
        },
        {
            id: 3,
            title: "Cool Project 3",
            image: dog4,
            description: "This is a short description of Project 3.",
            details: "Here you can add more information about Project 3."
        },
        {
            id: 4,
            title: "Cool Project 4",
            image: dog6,
            description: "This is a short description of Project 4.",
            details: "Here you can add more information about Project 4."
        },
    ];

    const toggleProject = (project) => {
        setSelectedProject((prev) => (prev?.id === project.id ? null : project));
    };

    const handleKey = (e, project) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleProject(project);
        }
    };

    return (
        <div className="portfolio">
            {/* Header */}
            <header className="header" id="start">
                <div>
                    <h1>André Bernet</h1>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Dropdown</button>
                    <div className="dropdown-content">
                        <a href="#start">Start</a>
                        <a href="#AboutMe">About Me</a>
                        <a href="#projekts">Projekts</a>
                        <a href="#link">Links</a>
                    </div>
                </div>
            </header>

            {/* About Me */}
            <section className="about">
                <img
                    src={dog5}
                    alt="Profile"
                    className="profile-pic"
                />
                <div id="AboutMe">
                    <h2>About Me</h2>
                    <p>
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                        somting wong somting wong somting wong somting wong somting wong
                    </p>
                </div>
            </section>

            {/* Projects */}
            <section className="projects" id="projekts">
                <h2>My Projects</h2>
                <div className="project-grid">
                    {projects.map((project) => {
                        const isOpen = selectedProject?.id === project.id;
                        return (
                            <div
                                key={project.id}
                                role="button"
                                tabIndex={0}
                                aria-expanded={isOpen}
                                onClick={() => toggleProject(project)}
                                onKeyDown={(e) => handleKey(e, project)}
                                className="project-card"
                            >
                                <img src={project.image} alt={project.title} />
                                <div className="card-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>

                                    {/* Collapsible content */}
                                    {isOpen && (
                                        <div className="project-details animate-fadeIn">
                                            <p>{project.details}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
            <div className="link" id="link">
                <h3>LINKS:</h3>
                <SocialIcon url="https://www.github.com" bgColor="limegreen" fgColor="black" />
                <SocialIcon url="https://www.youtube.com" bgColor="limegreen" fgColor="black" />
                <SocialIcon url="https://www.discord.com" bgColor="limegreen" fgColor="black" />
                <SocialIcon url="https://www.spotify.com" bgColor="limegreen" fgColor="black" />
            </div>

            {/* Footer */}
            <footer className="footer">
                <div>
                    <p>© 2025 My Portfolio. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
