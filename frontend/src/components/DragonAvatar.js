/** @format */

import React, { Component } from "react";
import {
  skinny,
  slender,
  sporty,
  stocky,
  patchy,
  plain,
  spotted,
  striped
} from "assets";

const propertyMap = {
  backgroundColor: {
    black: "#000000",
    white: "#FFFFFF",
    green: "#00FF00",
    blue: "#0000FF"
  },
  build: { slender, stocky, sporty, skinny },
  pattern: { plain, striped, spotted, patchy },
  size: { small: 100, medium: 140, large: 180, enormous: 220 }
};

class DragonAvatar extends Component {
  get DragonImage() {
    const dragonPropertyMap = {};

    this.props.dragon.traits.forEach((trait) => {
      const { traitType, traitValue } = trait;
      dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
    });

    const { backgroundColor, build, pattern, size } = dragonPropertyMap;

    const sizing = { width: size, height: size };

    return (
      <div className="dragon-avatar-image-wrapper">
        <div
          className="dragon-avatar-image-background"
          style={{
            backgroundColor: backgroundColor,
            ...sizing
          }}
        />
        <img
          src={pattern}
          className="dragon-avatar-image-pattern"
          style={{ ...sizing }}
          alt=""
        />
        <img
          src={build}
          className="dragon-avatar-image"
          style={{ ...sizing }}
          alt=""
        />
      </div>
    );
  }

  render() {
    const { generationId, dragonId, traits } = this.props.dragon;

    return (
      <div>
        <span>G{generationId}.</span>
        <span>I{dragonId}. </span>

        {traits.map((trait) => trait.traitValue).join(", ")}
        {this.DragonImage}
      </div>
    );
  }
}

export default DragonAvatar;
