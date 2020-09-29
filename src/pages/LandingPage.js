import React from 'react';
import facebook_icon from '../assets/facebook.png';
import twitter_icon from '../assets/twitter.png';
import instagram_icon from '../assets/instagram.webp';
import wordBaseDisp_1 from '../assets/wordBaseDisp_1.jpeg';
import wordBaseDisp_2 from '../assets/wordDisp2.png';
import html5 from '../assets/icons8-html-5-96.png';
import css3 from '../assets/icons8-css3-96.png';
import javascript from '../assets/icons8-javascript-96.png';
// import Toggle from '../Function/toggle_btn';
import Logo from '../assets/logo1.png';
import { Link } from 'react-router-dom';
import SideNav from '../components/navigationSide';
import Footer from '../components/footer';
// import { contentAnimation } from '../animations/LandingPageAnimation';
// import { useEffect } from 'react';
import { IntroContent } from '../components/introContent';
class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // isScrolled: false,
            isActive: false,
        };
        // this.handleScroll = this.handleScroll.bind(this);
        this.handleToggle = this.handleToggle.bind(this)
    }
    handleToggle(e) {
        e.preventDefault();
        this.setState({
            isActive: !this.state.isActive
        })
    }



    render() {

        // window.addEventListener("scroll", () => {
        //     if (window.scrollY > 50) {
        //         return document.getElementsByClassName(".navigation").classList.add('hide');
        //     } else {
        //         return document.getElementsByClassName(".navigation").classList.remove('hide');
        //     }

        // });
        return (
            <div>
                {/* Landing page begins here */}
                <div id="sec" className={this.state.isActive ? "banner active" : "banner"}>
                    <header id="home">
                        <div className="logo">
                            <Link to="/">
                                <img src={Logo} alt="" id="logo" />
                            </Link>
                        </div>
                        <div
                            className="toggle"
                            id="toggle"
                            onClick={this.handleToggle}

                        >
                        </div>
                    </header>

                    <IntroContent />

                    <ul className="sci">
                        <li>
                            <a href="https://www.facebook.com/toby.tobymarsh/">
                                <img src={facebook_icon} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/tobey_mis">
                                <img src={twitter_icon} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/_to.bey_/">
                                <img src={instagram_icon} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>

                <SideNav />

                <div id="clearfix"></div>

                <div className="page-about">
                    <div className="page-holder">
                        <div className="page-wrapper">
                            <div className="wordBaseHead">
                                <h1>
                                    <font>
                                        Heads together,
                                    </font>
                                    <br />
                                    <font>
                                        hands together.
                                    </font>
                                </h1>
                            </div>
                            <div className="wordBaseBody">
                                <p>
                                    Where creativity, media and technology come together, solutions emerge that have an impact. <br />
                                    it we like to devise, create, build and improve them together with the brands and organizations we work for. And that is precisely why we get all hands on each other.
                                </p>
                            </div>
                            <div className="wordBaseDisp-sc1">
                                <img src={wordBaseDisp_1} alt="wordBaseDisp_1" />
                            </div>
                        </div>
                        <div className="page-wrapper fc-2hw">
                            <div className="wordBaseHead">
                                <h1>
                                    <font>
                                        I
                                    </font>
                                    <br />
                                    <font>
                                        think
                                    </font>
                                </h1>
                            </div>
                            <div className="wordBaseBody">
                                <p>
                                    we no longer live at the stone age period where we needed smoke to communicate. <br />
                                    <q>It has become appallingly obvious that our technology has exceeded our humanity</q>
                                    <span>_Albert Einstein_</span>
                                </p>
                            </div>
                            <div className="wordBaseDisp-sc1 fc-df2">
                                <img src={wordBaseDisp_2} alt="wordBaseDisp_1" />
                            </div>
                        </div>
                        <div className="page-wrapper fc-2gw">
                            <div className="wordBaseHead">
                                <h1>
                                    <font>
                                        I
                                    </font>
                                    <br />
                                    <font>
                                        create
                                    </font>
                                </h1>
                            </div>
                            <div className="wordBaseBody fc-2fw">
                                <ul>
                                    <li>
                                        content creation
                                    </li>
                                    <li>
                                        packaging design
                                    </li>
                                    <li>
                                        web &amp; interface design
                                    </li>
                                </ul>
                                <p>
                                    I believe in co-creation and involve you in my creative process where possible. I develop creative proposals that suit you like a warm jacket.
                                </p>
                            </div>
                            <div className="wordBaseDisp-sc1">
                                {/* <img src="" alt="wordBaseDisp_3"/> */}
                            </div>

                            <div className="page-wrapper fc-2gfw">
                                <div className="wordBaseHead">
                                    <h1>
                                        <font>
                                            I
                                        </font>
                                        <br />
                                        <font>
                                            build
                                        </font>
                                    </h1>
                                </div>
                                <div className="wordBaseBody">
                                    <p>
                                        Whatever I come up with, I can build and manufacture it for you. Experience the convenience: from idea to development under one roof.
                                    </p>
                                </div>
                                <div className="wordBaseDisp-sc1 fc-2vc">
                                    <ul className="sc-1xc">
                                        <li>
                                            <div className="wordBaseTranslan-container">
                                                <div className="wordBaseTranslan-wrapper">
                                                    <img src={html5} alt="" />
                                                    <h3>
                                                        Html5
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="wordBaseTranslan-container">
                                                <div className="wordBaseTranslan-wrapper">
                                                    <img src={css3} alt="" />
                                                    <h3>
                                                        css3
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="wordBaseTranslan-container">
                                                <div className="wordBaseTranslan-wrapper">
                                                    <img src={javascript} alt="" />
                                                    <h3>
                                                        javascript
                                                    </h3>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <section className="wbc">
                                    <div className="wordBaseCore">
                                        <div className="wordBaseCore-container">
                                            <h3>
                                                &lt;Core&#8725;&gt;
                                            </h3>
                                            <br />
                                            <p>
                                                My main area of expertice is frontend development. I keep up with all the latest features of <code>ReactJS, Javascript, CSS</code> and <code>HTML</code>. This includes, and is not limited to React Hooks/Router, ES6, HTML5, CSS3, and complex state management.
                                            </p>
                                        </div>
                                    </div>
                                    <div id="clearfix"></div>
                                    <div className="wordBaseCore wc-ft">
                                        <div className="wordBaseCore-container">
                                            <h3>
                                                &lt;Development&#8725;&gt;
                                            </h3>
                                            <br />
                                            <p>
                                                For the development process, I set up my dev environment with <code>Node.js</code>, initialize projects with<code> Webpack</code> and handle my workflow and source control with Git and Git Bash.
                                            </p>
                                        </div>
                                    </div>
                                    <div id="clearfix"></div>
                                    <div className="wordBaseCore">
                                        <div className="wordBaseCore-container">
                                            <h3>
                                                &lt;Design&#8725;&gt;
                                            </h3>
                                            <br />
                                            <p>
                                                I'm experienced with a wide variety of styling options, I prefer to use CSS-in-JS libraries such as <code>Styled Components</code> but have also created several projects with CSS Modules and other CSS preprocessors like <code>SASS</code>
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <section className="contactBase">
                    <div className="contactBase-wrapper">
                        <h3>
                            Would you like to <br /> work together?
                        </h3>
                        <span className="contLink">
                            <Link to="/contact">
                                Please contact me »
                            </Link>
                        </span>
                    </div>
                </section> */}

                {/* footer */}
                <Footer />
            </div>
        );
    }
}

export default LandingPage;