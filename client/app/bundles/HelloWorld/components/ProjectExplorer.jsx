import PropTypes from 'prop-types';
import React from 'react';
import PhaseEditor from './PhaseEditor'
import Phase from './Phase';

export default class ProjectExplorer extends React.Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    projectId: PropTypes.number
  };

  constructor(props, _railsContext) {
    super(props);

    this.state = {
      phases: this.getPhases(),
      selectedPhase: null,
      isBusy: false
    };
  }

  getPhases() {
    return [{id: 0, images:[{url:''}]}];
  }

  phases() {
    const phases = this.state.phases.map((p) =>
      <Phase phase={p} key={`phase-${p.id}`} />
    );
    return phases;
  }

  selectPhase = (e) => {

  };

  addPhase = (e) => {
    console.log('Adding a phase yo');
    this.setState({
      phases: this.state.phases.concat([e])
    });
  }

  setBusy = (isBusy) => {
    console.log((isBusy ? "Uploading..." : "Done Uploading"));
    this.setState({busy: isBusy})
  }

  render() {
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell mdl-cell--12-col">
          <div id="phase-container">
            <div className="mdl-grid mdl-grid--nesting">
              { this.phases() }
            </div>
          </div>
        </div>
        <div className="mdl-cell--12-col">
          <PhaseEditor setBusy={this.setBusy} addPhase={this.addPhase} />
        </div>
      </div>
    );
  }
}
