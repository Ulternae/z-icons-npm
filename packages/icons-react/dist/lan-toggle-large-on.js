import React from 'react';

export const LanToggleLargeOn = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 128a128 128 0 1 0 0 256 128 128 0 1 0 0-256m0 288H160C71.6 416 0 344.4 0 256S71.6 96 160 96h256c88.4 0 160 71.6 160 160s-71.6 160-160 160m-96-32c-38.9-29.2-64-75.7-64-128s25.1-98.8 64-128H160c-70.7 0-128 57.3-128 128s57.3 128 128 128z"})
);

export default LanToggleLargeOn;
