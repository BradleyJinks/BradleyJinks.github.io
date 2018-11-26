import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Bradley Jinks</h1>
                <p>Student - Software Engineer - Gamer</p>
            </div>
            <ul className="icons">
            <li><a href="https://twitter.com/BradleyJinks" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="https://www.linkedin.com/in/bradleyjinks/" className="icon fa-linkedin"><span className="label">Facebook</span></a></li>
            <li><a href="https://github.com/BradleyJinks" className="icon fa-github"><span className="label">GitHub</span></a></li>
            <li><a href="mailto:bradley.jinks123@gmail.com" className="icon fa-envelope-o"><span className="label">GitHub</span></a></li>

          </ul>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('skills')}}>Skills</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
