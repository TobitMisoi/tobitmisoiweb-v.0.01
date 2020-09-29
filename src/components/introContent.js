import React from 'react'
import { useEffect } from 'react'
import gsap from 'gsap';

let tl = gsap.timeline();


export const IntroContent = () => {
    useEffect(() => {
        tl.from(".intro__content", 1.8, {
            y: 100,
            ease: "power2.out",
            // delay: 1,
            // skewY: -7,
        })
    })
    return (
        <>
            <div className="intro__content">
                <div className="intro-content-container">
                    <h3 className="intro-heading">
                        <font>
                            Hi, my name is
                        </font>
                    </h3>
                    <ul className="intro-content-items">
                        <li className="myName">
                            <font>
                                Tobit Misoi
                            </font>
                        </li>
                        <li className="intro-specialities">
                            <font>
                                a <span>UX</span> + <span>Product Designer</span> obsessed with customers + <code>helping others</code>
                            </font>
                        </li>
                        <li className="intro-brief-description">
                            <p>
                                currently studying @ <a href="https://zetech.ac.ke">Zetech</a>. 
                                I'm passionate about improving the lives of others through design and am constantly looking to learn new things everyday.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
