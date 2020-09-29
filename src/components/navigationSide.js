import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class NavigationSide extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isActive: true,
        }
    }
    
    render() {
        return (
                <div id="navigation" className={this.state.isActive ? "navigation active" : "navigation"}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/service">Service</Link>
                        </li>

                        <li>
                            <Link to="/feed">Feed</Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"> Contact</Link>
                        </li>
                    </ul>
                </div>
        )
    }
}

export default NavigationSide;
