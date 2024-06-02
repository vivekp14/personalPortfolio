import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
export const About = () =>{
    return (
    <section className={styles.container} id="about">
<h2 className={styles.title}>About</h2>
<div className={styles.content}><img src = {getImageUrl("about/man-using-computer.png")} 
alt="Me sitting with a laptop" className={styles.aboutImage} />
<ul className={styles.aboutItems}>
    <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
<div className={styles.aboutItemText}>
    <h3>Backend Developer</h3>
    <p>I am a passionate backend developer with expertise in Java, Python and SQL.
        I love solving complex problems and building efficient systems and have expreience with APIs</p>
</div>
    </li>
    <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="Cursor Icon" />
<div className={styles.aboutItemText}>
    <h3>Frontend Developer</h3>
    <p>I am a frontend developer with a love for creating beautiful and interactive web experiences.
I specialize in HTML, CSS, JavaScript, Angular, and React and I am always eager to learn new technologies</p>
</div>
    </li>
    </ul>
</div>
    </section>
    );
};