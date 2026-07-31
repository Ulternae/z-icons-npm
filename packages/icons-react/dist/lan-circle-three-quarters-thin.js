import React from 'react';

export const LanCircleThreeQuartersThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M226 17.9C107.6 32.6 16 133.7 16 256c0 132.6 107.5 240 240 240 122.4 0 223.4-91.6 238.2-210 .8-6.7-4.7-14-14.2-14H272c-17.7 0-32-14.3-32-32V32c0-9.4-7.3-15-14-14.1M224.1 2C241.6-.2 256 14.3 256 32v208c0 8.8 7.2 16 16 16h208c17.7 0 32.2 14.4 30 31.9C494.3 414.2 386.6 512 256 512 114.6 512 0 397.4 0 256 0 125.4 97.8 17.7 224.1 2"})
);

export default LanCircleThreeQuartersThin;
