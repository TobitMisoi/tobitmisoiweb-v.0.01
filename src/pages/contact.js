import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import textAreainit from '../Function/contact_toggle';
import backArrow from '../assets/icons8-back-to-48.png';
// import axios from 'axios';

// let qformToggle = document.getElementsByClassName('toggle');

class Contact extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            phone: '',
            question: '',
            isActive: false,
            isError: false,
            // isLoading: false,
        }
        this.handleFormToggle = this.handleFormToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFormToggle(e) {
        e.preventDefault();
        this.setState({
            isActive: !this.state.isActive
        });
    }

    handleChange(e) {
        const name = e.target.name;

        this.setState({
            [name]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        // Grab state
        const { username, email, phone, question } = this.state

        // this.setState({
        //     isLoading: false
        // });

        // Post request from sever
        fetch('http://localhost:5000/api/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                phone: phone,
                question: question
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                console.log('json', json);
                if (json.success) {
                    this.setState({
                        // isLoading: true,
                        isError: json.message,
                        username: '',
                        email: '',
                        phone: '',
                        question: ''
                    });
                } else {
                    this.setState({
                        // isLoading: true,
                        isError: json.message
                    })
                }
            })
            .then(this.resetInput)
            .catch(err => console.error(err));
    }

    render() {
        const active = this.state.isActive;
        // console.log(active);
        // console.log(this.state);
        const { isError } = this.state;
        // if (isLoading) {
        //     return(
        //     <div>
        //         <p>
        //             Loading...
        //         </p>
        //     </div>
        //     );
        // }
        // if (isError) {
        //     return(
        //         <div>
        //             <p>
        //                 {
        //                     isError ? '' : 'Right'
        //                 }
        //             </p>
        //         </div>
        //     )
        // }
        return (

            <div id="contact" onLoad={textAreainit}>
                <span className="backDrop">
                    <Link to="/">
                        Back
                </Link>
                </span>
                <div id="clearfix"></div>

                <main className="contactPageTrans">

                    <h1>
                        How can I help You?
                </h1>
                    <NavLink
                        to='#question'
                        onClick={this.handleFormToggle}
                    >
                        I have a question
                </NavLink>
                    <br />
                    {/* <NavLink 
                to="#cooporate"
                onClick={this.handleFormToggle}
                >
                    I want to cooporate
                </NavLink> */}
                    <address>
                        You can always call on <code>+254 778 288 520</code>, or simply send a message to <a href="https://wa.me/message/TIYJ5XLOVUIRI1"> Whatsapp </a>
                    </address>
                </main>
                <nav className="qformWrapper">
                    <div className={active ? "qform active" : "qform"} id="qform">
                        <div className="qbackArrow">
                            <Link to="/contact" onClick={this.handleFormToggle}>
                                <img src={backArrow} alt="qform_back_arrow" title="back" />
                            </Link>
                        </div>
                        {/* <Link to={ `/contact/${this.state}` }> */}
                        {
                            (isError) ? (<div>{isError}</div>) : (null)
                        }
                        <form action="POST" className="qformInputContent" onSubmit={this.handleSubmit}>
                            <div className="qformHeading">
                                <h2 className="qformTitle">
                                    <font>
                                        Come on!
                                    </font>
                                </h2>
                            </div>
                            <div className="qformBody">
                                <ul className="qform-mw">
                                    <li>
                                        <div className="qinputContainer qwc">
                                            <input type="text" name="username" id="input_1_1" className="qmedium" tabIndex="1" aria-invalid="false" value={this.state.username} onChange={this.handleChange} />
                                            <label htmlFor="placeholder" className={active ? "qinputPlaceholder active" : "qinputPlaceholder"} >
                                                {active ? "Name" : this.handleUsername}
                                                {/* <span>*</span> */}
                                            </label>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="qinputContainer">
                                            <input type="email" name="email" id="input_1_2" className="qmedium" tabIndex="1" aria-invalid="false" value={this.state.email} onChange={this.handleChange} />
                                            <div className="qinputPlaceholder">
                                                <font>Email</font> <span>*</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="qinputContainer">
                                            <input type="text" name="phone" id="input_1_3" className="qmedium" tabIndex="1" aria-invalid="false" value={this.state.phone} onChange={this.handleChange} />
                                            <div className="qinputPlaceholder">
                                                Phone <span>*</span>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="qinputQContainer">
                                            <div className="qinputQPlaceholder">
                                                Your question <span>*</span>
                                            </div>
                                            <textarea className="qinputQ" name="question" id="input_1_4" cols="30" rows="10" tabIndex="1" aria-required="true" value={this.state.question} onChange={this.handleChange} >

                                            </textarea>
                                        </div>
                                    </li>
                                </ul>
                                <div className="qformSubmit">
                                    <div className="qformTransWrapper">
                                        {/* <Link ={`/contact${this.state.username}`}> */}
                                        <input type="submit" value="Send »" />
                                        {/* </Link> */}
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* </Link> */}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Contact;