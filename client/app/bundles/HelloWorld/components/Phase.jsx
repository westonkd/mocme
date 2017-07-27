import PropTypes from 'prop-types';
import React from 'react';

export default class Phase extends React.Component {
  static propTypes = {
    phase: PropTypes.object.isRequired,
  };

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    console.log(this.props.phase);
    return (
      <div className='mdl-cell mdl-cell--3-col'>
        <div className='phase-icon'>
          <img src={this.props.phase.images[0].url} />
        </div>
      </div>
    );
  }
}
