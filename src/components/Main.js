import React from 'react'
import PropTypes from 'prop-types'

import pic02 from '../images/pic02.jpg'
import fetch from 'cross-fetch';
import WorkItem from './WorkItem';

class Main extends React.Component {
  state={
    loading:true
  }
  componentDidMount(){
const slef = this;
    fetch('https://api.github.com/users/bradleyjinks/repos')
        .then(function(response){ 
            return response.json(); 
        })
        .then(function(json){ 
          slef.setState({repos: json,loading:false}); 
        });
  }
  
  renderRepos(){
    
    if(this.state.loading){
      return <p>Loading ......</p>
    }else{
      let {repos} = this.state;
      return Object.keys(repos).map((key)=>{
        let repo=repos[key];
        return <WorkItem key={key} repo={repo}></WorkItem>
      })
    }
  }
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>
    
    //console.log(gitRepos);
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
          {this.renderRepos()}
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
          <form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
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
              {/* <li><button type="submit" value="Send Message" className="special" /></li> */}
              <li><button className="special">Send</button></li>
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