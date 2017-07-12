import PropTypes from 'prop-types';
import React from 'react';
import ImageUpload from './ImageUpload';

export default class PhaseEditor extends React.Component {
  static propTypes = {
    phase: PropTypes.object,
    setBusy: PropTypes.func.isRequired
  };

  constructor(props, _railsContext) {
    super(props);
  }

  render() {
    return (
      <div id="phase-editor">
        <ImageUpload setBusy={this.props.setBusy} />
      </div>
    );
  }
}
