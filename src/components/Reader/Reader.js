import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './Controls/Controls';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';

class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf.isRequired,
  };

  state = {
    publicationIndex: 0,
  };

  forward = () => {
    const { publicationIndex } = this.state;
    this.setState(state => ({
      publicationIndex:
        publicationIndex < 11 && publicationIndex >= 0
          ? state.publicationIndex + 1
          : state.publicationIndex,
    }));
  };

  back = () => {
    const { publicationIndex } = this.state;
    this.setState(state => ({
      publicationIndex:
        publicationIndex <= 11 && publicationIndex > 0
          ? state.publicationIndex - 1
          : state.publicationIndex,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const publication = items[publicationIndex];
    return (
      <div>
        <Controls
          btn={publicationIndex}
          forward={this.forward}
          back={this.back}
        />
        <Progress number={publicationIndex} />
        <Publication publication={publication} />
      </div>
    );
  }
}

export default Reader;
