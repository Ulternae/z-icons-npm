import React from 'react';

export function LanFieldHockeyStickBallSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -0.041 512.072 544.041',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M432 544a80 80 0 1 1 0-160 80 80 0 1 1 0 160m-2.9-345.5L264.9 447.1c-26.7 40.5-72 64.9-120.5 64.9C64.7 512 0 447.3 0 367.6V344c0-30.9 25.1-56 56-56s56 25.1 56 56v23.6c0 17.9 14.5 32.4 32.4 32.4 10.9 0 21.1-5.5 27.1-14.6l162.6-246.3zM409.3 25.2c17-25.9 51.7-33 77.6-16s32.9 51.8 15.9 77.6l-47.2 71.6-95-59.4 48.8-73.9z"})
  );
}

export default LanFieldHockeyStickBallSolid;
