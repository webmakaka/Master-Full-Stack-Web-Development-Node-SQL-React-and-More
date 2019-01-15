import React, { Component } from 'react';

class DragonAvatar extends Component {
  render() {
    const { generationId, dragonIn, traits } = this.props.dragon;

    return (
      <div>
        <span>G {generationId} .</span>
        <span>I {dragonIn} . </span>

        {traits.map(trait => trait.traitValue).join(', ')}
      </div>
    );
  }
}

export default DragonAvatar;
