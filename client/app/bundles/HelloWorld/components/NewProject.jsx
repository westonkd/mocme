import PropTypes from 'prop-types';
import React from 'react';

export default class NewProject extends React.Component {
  static propTypes = {
    createProjectImage: PropTypes.string.isRequired
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      name: this.props.name
    };
  }

  styles() {
    return({
      height: '176px',
      background: "url(" + this.props.createProjectImage + ") no-repeat",
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'space-between',
      backgroundSize: "100% auto"
    });
  }

  createProject = (event) => {
    console.log('here');
  }

  render() {
    return (
      <div className="mdl-grid mdl-grid--no-spacing create-project">
        <div className="mdl-cell--4-col">
          <div className='project-banner' style={ this.styles() }>
            <div className="spacer">test</div>
            <div className='banner-title'>
              <h1>1. Create your Project</h1>
            </div>
          </div>
          <div className="white-bg project-container">
            <p>Projects are a way to show your MOC's story. Get started my adding a name and description below.</p>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input className="mdl-textfield__input"
                     type="text"
                     id="project-title"
                     ref={(input) => { this.projectTitle = input; }}/>
              <label className="mdl-textfield__label" htmlFor="project-title">Project Title</label>
            </div>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <textarea className="mdl-textfield__input"
                        type="text"
                        rows="6"
                        id="description"
                         ref={(input) => { this.projectDescription = input; }}>
              </textarea>
              <label className="mdl-textfield__label" htmlFor="description">Project Description</label>
            </div>
            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                    onClick={(e) => this.createProject(e)}>
              Create Project
            </button>
          </div>
        </div>
        <div className="mdl-cell--8-col">
          test
        </div>
      </div>
    );
  }
}
