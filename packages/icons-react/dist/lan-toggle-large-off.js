import React from 'react';

export const LanToggleLargeOff = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 384a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0 32h256c88.4 0 160-71.6 160-160S504.4 96 416 96H160C71.6 96 0 167.6 0 256s71.6 160 160 160m96-32c38.9-29.2 64-75.7 64-128s-25.1-98.8-64-128h160c70.7 0 128 57.3 128 128s-57.3 128-128 128z"})
);

export default LanToggleLargeOff;
