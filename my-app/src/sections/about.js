import React from 'react';
import './about.css';

function About() {
    return (
        <section id="about">
            <div className="aboutMassCont">
                <div className="aboutContainer">
                    <img className="aboutImg" src="about.png" alt="about"></img>
                    <div className="aboutText">
                        <div className="aboutTitle">
                            <p>nice to meet you!</p>
                            <h2>i'm saadhvi narayanan</h2>
                        </div>
                        <div className="aboutDesc">
                            <p>i'm a bioengineer and computer science enthusiast looking to explore design of medical devices and electrical systems at university of california, berkeley!</p> <br />
                            <p>from carnatic music to reading, i love learning everything. here's stuff that i love:</p>
                            <ul>
                                <li>reading stories from various cultural backgrounds, enticed with mythology</li>
                                <li>watching the occasional k-drama</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
