import React, { Component } from 'react'

export default class WorkItem extends Component {

  render() {
    const {name,description,homepage,html_url}=this.props.repo;
    let {language} = this.props.repo;
    language = language==='CSS' ? 'Javascript' : language
    const header = homepage ? <h3><a className="icon fa-globe" href={homepage}>{name} | {language}</a></h3> : <h3>{name} | {language} | <a className="icon fa-github" href={html_url}>Code</a></h3>
    
    return (
      <React.Fragment>
        {header}
          <p>{description}</p>
      </React.Fragment>
    )
  }
}
