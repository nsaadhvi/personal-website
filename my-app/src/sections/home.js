import React from 'react';
import './home.css';
import expImg from '../assets/exp.png';
import {Link} from 'react-scroll';
import imageSlide from '../data.js';

import { useEffect, useState } from 'react';

const Home = () => {
    const[currentState, setCurrentState] = useState(0)
    useEffect(() => {
        const timer = setTimeout(()=> {
            if (currentState === 3) {
                setCurrentState(0)
            }else {
                setCurrentState(currentState+1)
            }

        }, 5000)
        return () => clearTimeout(timer)
    },[currentState])
    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState]}.url)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vw',


    }
    
    return (
        <div> 
            <section id="home">
                <div className='countiner-style'>
                    <div className='bgImageHome' style={bgImageStyle}></div>
                    <div className='description'>
                        <h1>{imageSlide[currentState].title}</h1>
                        <p>{imageSlide[currentState].body}</p>
                        <Link><button className='btn'>about me</button></Link>
                    </div>
                </div>
            </section>

            <section id="experience">
                <div className='experience'>
                    <div className='experienceTextContainer'>
                        <div className="experienceTitle">experience</div>
                        <div className="experienceDesc">i love taking on new projects, exploring what more the world can offer. here are some of my latest projects:</div>
                    </div>
                    <div className="experienceCards">
                        <div className="experienceCard">
                            <div className="experienceCardText">
                                <h2>kalai: art for positivity</h2>
                                <p>kalai is my drawing outlet to sketch, create, innovate, and inspire others to seek positive parts of their day, through art and beyond!</p>
                                <button className="projType">digital art</button>
                            </div>
                            <img src={expImg} alt="exp-1" className="expImg"></img>
                        </div>
                        <div className="experienceCard">
                            <div className="experienceCardText">
                                <h2>aging research</h2>
                                <p>at the conboy lab at uc berkeley, we work to create treatments that halt the negative effects of aging.</p>
                                <button className="projType">bioengineering</button>
                            </div>
                            <img src={expImg} alt="exp-1" className="expImg"></img>
                        </div>
                        <div className="experienceCard">
                            <div className="experienceCardText">
                                <h2>colorful combination of composers</h2>
                                <p>annualy, hunderds of students in the southern california community come together to share their love for carnatic music while raising money for a good cause.</p>
                                <button className="projType">music</button>
                            </div>
                            <img src={expImg} alt="exp-1" className="expImg"></img>
                        </div>
                    </div>
                    </div>
            </section>
        </div>
    )

        // <section id="home">
        //     <div className="introContent">
        //         <span className="hello">Hello,</span> <br />
        //         <span className="introText">I'm <span className="introName">Saadhvi</span></span>
        //         <p className="introPara">I'm a bioengineer at UC Berkeley looking to change the world through innovation everyday.</p>
        //         <Link><button className="btn">About Me</button></Link>
        //     </div>
        //     {/* carousel here */}
        // </section>
    // )
}

export default Home;