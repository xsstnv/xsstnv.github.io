import React from 'react';
import Pages from '../../components/pages/Pages';
import { withRouter } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { isBrowser, isMobile } from "react-device-detect";

const menuItems = [
    {
        label: 'About',
        uri: 'about'
    },
    {
        label: 'Posts',
        uri: 'posts'
    },
    {
        label: 'Project',
        uri: 'project'
    }
];

const LayoutContent = props => {

    const [visible, setVisible] = React.useState(false);

    return (
        <div className="container">
            <div className="header">
                <div className="header-inner">
                    <div className="logo" onClick={() => props.history.push("/")}>
                        <Typewriter
                            onInit={typewriter => {
                                typewriter
                                    .typeString('> $ cd /root/')
                                    .pauseFor(500)
                                    .deleteChars(5)
                                    .typeString('home/')
                                    .start();
                            }}
                        />
                    </div>
                    <span className="header-right">
                        <nav className="menu">
                            {isBrowser || (isMobile && visible) &&
                                <ul className="menu-inner">
                                    {menuItems.map(menuItem => (
                                        <li onClick={() => props.history.push(menuItem.uri)}>{menuItem.label}</li>
                                    ))}
                                </ul>
                            }
                        </nav>
                        <span class="theme-toggle">
                            <svg class="theme-toggler" width="24" height="24" viewBox="0 0 48 48" fill="#333" xmlns="http://www.w3.org/2000/svg">
                                <path d={`
                                            M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
                                            3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
                                            13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z
                                        `}>
                                </path>
                            </svg>
                        </span>

                        {isMobile &&
                            <span class="menu-trigger" onClick={() => setVisible(!visible)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#333" viewBox="0 0 24 24">
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                                </svg>
                            </span>
                        }
                    </span>
                </div>
            </div>
            <div className="content">
                <main aria-role="main">
                    <Pages />
                </main>
            </div>
            <div className="footer">
                <div className="footer-inner">
                    <div className="footer-content">
                        Project maintained by&#160;<a href="https://github.com/xsstnv/">Martin Stoynov</a>
                    </div>
                </div>
                <div className="footer-inner">
                    <div className="footer-content">
                        Thanks to&#160;<a href="https://www.jomar.fr/">Jomar</a>&#160;and&#160;<a href="https://github.com/rhazdon">rhazdon</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default withRouter(LayoutContent);