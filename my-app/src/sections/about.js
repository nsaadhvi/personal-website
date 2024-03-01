import React from 'react';
import './about.css';

const About = () => {
    return (
        <section id="about">
            <div className="aboutContainer">
                <img className="aboutImg" src="../assets/about.png" alt="about"></img>
                <div className="aboutText">
                    <div className="aboutTitle">
                        <p>Nice to meet you!</p>
                        <h2>I'm Saadhvi Narayanan</h2>
                    </div>
                    <div className="aboutDesc">
                        <p>I'm a bioengineer and computer science enthusiast looking to explore design of medical devices and electrical systems at University of California, Berkeley!</p> <br />
                        <p>From Carnatic music to reading, I love learning everything</p>
                        <ul>
                            <li>reading stories from various cultural backgrounds, enticed with mythology</li>
                            <li>watching the occasional k-drama</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
