import React from 'react';
import Pages from '../../components/pages/Pages';
import { withRouter } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const LayoutContent = props => {

    return (
        <div className="container">
            <div className="header">
                <div className="header__inner">
                    <div className="logo" onClick={() => props.history.push("/")}>
                        <Typewriter
                            onInit={typewriter => {
                                typewriter
                                    .typeString('> $ cat /../../etc/passwd')
                                    .pauseFor(1000)
                                    .deleteChars(20)
                                    .typeString('d /home/')
                                    .start();
                            }}
                        />
                    </div>
                    <span className="header__right">
                        <nav className="menu">
                            <ul className="menu_inner">
                                <li>About</li>
                                <li>Posts</li>
                                <li>Projects</li>
                            </ul>
                        </nav>
                        {/* <div className="theme-toggle">
                            <svg class="theme-toggler" width="24" height="24" viewBox="0 0 48 48" fill="#333" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
                                    3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
                                    13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z">
                                </path>
                            </svg>
                        </div> */}
                    </span>
                </div>
            </div>
            <div className="content">
                <Pages />
            </div>
            <div className="footer">
                <div className="footer_inner">
                    <div className="footer_content">
                        Project maintained by&#160;<a href="https://github.com/xsstnv/">stnv</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(LayoutContent);