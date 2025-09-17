import { useState } from "react";
import "./Portfolio.css";
import Hamster from "./assets/Hamster.png"
import Tictactoe from "./assets/Tictactoe.jpg"
import ZooWebseite from "./assets/ZooWebseite.png"
import Portfolioo from "./assets/img.png"
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
            title: "Hamster Spiel",
            image: Hamster,
            description: "Im hamster Spiel muss man der Hamster die Körenr einsammeln",
            details: "Das Hamster Spiel war meine einleitung in die Informatik. Mit dem Spiel konnte ich die basis der Informatik lernen und konnte kentnisse aufbauen."
        },
        {
            id: 2,
            title: "Arduino Tictactoe",
            image: Tictactoe,
            description: "Ich habe auf einem 8x8 Arduino Tictactoe programiert.",
            details: "Das zu verfügung gestellte Arduino hatte ein 8x8 Screen. Darauf habe ich mit zwei von meinen Freunden 9 felder erstellt. Danach mussten wir noch die Spiellogik einfügen. Das Arduino hatte begrenzte Knöpfe, welche man benützen konnte. Dadurch mussten wir auch noch über die auswahl der felder nachdenken. Ich hatte viel spass mit dem Projekt, da es das erste Projekt war, beidem ich wirklich etwas etellt habe.  "
        },
        {
            id: 3,
            title: "Zoo Webseite",
            image: ZooWebseite,
            description: "In dem Projekt musste ich eine Webseite zu einem Zoo erstellen",
            details: "Diese Webseite habe ich mit HTML gemacht. Dazu war die Webseite eine Multipage, was heisst dass, ich die Seiten miteinader verlinken musste. Dies war meine erste richtige Webseite, welche ich erstellt habe."
        },
        {
            id: 4,
            title: "Portfolio",
            image: Portfolioo,
            description: "In diesem Projekt habe ich eine Webseite über mich und meine Projekte gemacht.",
            details: "Im Projekt Portfolio habe ich vieles neues gelernt. Ich habe Dropdownlisten Karten und Extensions für React benützt. Somit konnte ich mit react eine Webseite gestalten, inder ich Meine bisherigen Projekte anzeigen konnte."
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
                    <h2>Über mich</h2>
                    <p>
                        Hallo,
                        mein Name ist André und ich bin 16 Jahre alt.
                        Ich mache eine Ausbildung zum Informatiker Fachrichtung Applikationsentwicklung und besuche derzeit das zweite Jahr an der IMS.

                        In diesem Text erfährst du mehr über mich.
                        Meine Hobbys sind Tennis und Simracing. In meiner freizeit gehe ich gerne mit meinem Hund laufen. Außerdem programmiere ich auch in meiner Freizeit sehr gerne.

                        In diesem Portfolio findest du meine Projekte, die ich in den Praxislektionen erarbeitet habe. Wenn du auf ein Projekt klickst, erhältst du weitere Informationen dazu.
                        Am Ende befinden sich Symbole, über die du direkt zu meinen Kanälen gelangst.


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
