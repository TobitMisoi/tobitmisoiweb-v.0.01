import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
    return (
        <>
            <div className="contact-page">
                <div className="contact-page-container">
                    <ul className="contact-page-items">
                        <li className="generalEnq">
                            <div className="generalEnqTrans">
                                <h5>
                                    General Enquiries
                                </h5>
                                <Link to="gmail.com">
                                    <code>
                                        misoitobit@gmail.com
                                    </code>
                                </Link>
                            </div>
                        </li>
                        <li className="marketing">
                            <h5>
                                Marketing
                            </h5>
                            <Link to="gmail.com">
                                <code>
                                    misoitobit@gmail.com
                                </code>
                            </Link>
                        </li>
                        <li className="joinConversation">
                            <div className="joinConversationTrans">
                                <h5>
                                    Chit chat
                                </h5>
                                <button>
                                    Join
                                </button>
                            </div>
                        </li>
                        <li className="hireMe">
                            <div className="hireMeTrans">
                                <h5>
                                    Hire Me
                                </h5>
                                <code>
                                    for any website development
                                </code>
                                <br />
                                <button>
                                    Hire Me
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Contact
