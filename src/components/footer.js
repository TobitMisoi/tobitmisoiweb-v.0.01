import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class footer extends Component {
    render() {
        return (
            <>
                <div className="home__footer">
                    <div className="footer-row-container">
                        <Link to="/contact">
                            <h4>
                                Interested in getting the conversation started?
                            </h4>
                            <font>
                                Get in touch <code>with me</code>
                            </font>
                        </Link>
                    </div>
                    <div className="footer-row-container">
                        <Link to="/phasetwocontact">
                            <font>
                                Media
                            </font>
                        </Link>
                    </div>
                </div>
                <div className="copyrights">
                    tobit &copy; 2020
                </div>
            </>
        )
    }
}

export default footer;
