import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <p>A passionate Software Engineer specialising in building Full-Stack Applications to meet the needs of businesses using standard industry practices. Uses great communications skills to develop strong professional relationships with clients and team members. Strong problem-solving skills are used to meet the needs of the parties involved by making sure all risks and issues with the project are outlined in order to minimise problems.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <h3>Hello</h3>
          <p>Project desc</p>
          <ul>
            <li>Front-End:</li>
            <li>Back-End:</li>
            <li>Database:</li>
            <li>Hosting:</li>
          </ul>
          <h3>Hello</h3>
          <p>Project desc</p>
          <ul>
            <li>Front-End:</li>
            <li>Back-End:</li>
            <li>Database:</li>
            <li>Hosting:</li>
          </ul>
          <h3>Hello</h3>
          <p>Project desc</p>
          <ul>
            <li>Front-End:</li>
            <li>Back-End:</li>
            <li>Database:</li>
            <li>Hosting:</li>
          </ul>
          {close}
        </article>

        <article id="skills" className={`${this.props.article === 'skills' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Skills</h2>
          <ul>
            <li>HTML, CSS and JavaScript</li>
            <li>MVC/REST Frameworks</li>
            <li>Backend development (PHP, NodeJS)</li>
            <li>Object orientated languages (C#, Python)</li>
            <li>Teamworking Skills</li>
            <li>Good Communication</li>
            <li>Personal Development and Self Evaluation</li>
            <li>Great Time Management and Time Keeping</li>
            <li>Database Design (UML, DFD, ERD)</li>
            <li>Database Systems (Oracle, MySQL, PostgreSQL)</li>
            <li>Realtime Communication (Firebase, Socket.io)</li>
            <li>Documentation Skills</li>
            <li>Full Stack Development</li>
            <li>Object Orientated Programming Concepts</li>
            <li>Full UK Driving License</li>
          </ul>
          
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" name="contact" netlify>
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main