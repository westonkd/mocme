import PropTypes from 'prop-types';
import React from 'react';

export default class ProjectExplorer extends React.Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    projectId: PropTypes.number
  };

  constructor(props, _railsContext) {
    super(props);

  }

  updateName = (name) => {
    this.setState({ name });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>{this.props.active}</h2>
        <h3>{this.props.projectId}</h3>
      </div>
    );
  }
}
