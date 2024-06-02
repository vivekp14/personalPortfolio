import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () =>{
    return <section className={styles.container}><div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Vivek</h1>
    <p className={styles.description}>I'm a full-stack developer based in 
    India with over 2 years of experience in Java, Python and various Databases. 
    Reach out if you'd like to learn more!</p>
    <a href="mailto:vipin.prakash474@gmail.com" className={styles.contactBtn}>Contact Me</a></div>
    <img src={getImageUrl("hero/techie.png")} alt="Hero" className={styles.heroImg}/>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>;
        
    
}