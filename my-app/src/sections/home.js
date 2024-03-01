import React from 'react';
import './home.css';
import {Link} from 'react-scroll';
import imageSlide from '../data.js';
import '../pic-3.png';

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
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100vw',
    }
    return (
        <div className='countiner-style'>
            <div style={bgImageStyle}></div>
            <div className='description'>
                <h1>{imageSlide[currentState].title}</h1>
                <p>{imageSlide[currentState].body}</p>
            </div>
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