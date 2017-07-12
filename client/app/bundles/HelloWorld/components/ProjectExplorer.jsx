import PropTypes from 'prop-types';
import React from 'react';
import PhaseEditor from './PhaseEditor'

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
    return [1,2,3];
  }

  phases() {
    const phases = this.state.phases.map((p) =>
      <h3 key={p.toString()}>
        hi
      </h3>
    );
    return phases;
  }

  selectPhase = (e) => {

  };

  setBusy = (isBusy) => {
    console.log((isBusy ? "Uploading..." : "Done Uploading"));
    this.setState({busy: isBusy})
  }

  render() {
    return (
      <div className="mdl-grid mdl-grid--no-spacing">
        <div className="mdl-cell--12-col">
          <div id="phase-container">
            { this.phases() }
          </div>
        </div>
        <div className="mdl-cell--12-col">
          <PhaseEditor setBusy={this.setBusy} />
        </div>
      </div>
    );
  }
}
