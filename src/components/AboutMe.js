import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
    return (
        
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..."/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <div className="intro-wrapper">
                    <h1 className="about-heading">About Me</h1>
                    <p className="intro-pg">
                    Hello! I am Shawn Jauhal.  I am a recent college graduate that has been coding for the past 5 years.  I recently got my Bachelor’s at San Diego State University in Computer Science.  There I took up multiple interests, including: web development, Unity game development and cyber security.  Alongside my interest in cyber security, I joined my college’s cyber defense team upon joining SDSU.  There I competed in a variety of competitions, and served as team captain in Fall 2019 for multiple competitions.  I hope to kickstart my career as a software engineer, and have created this website to both show off my progress and hone my web development skills.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
