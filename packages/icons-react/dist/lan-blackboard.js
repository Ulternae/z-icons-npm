import React from 'react';

export const LanBlackboard = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 120v296h192v-48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v48h64V120c0-13.3-10.7-24-24-24H88c-13.3 0-24 10.7-24 24M32 416V120c0-30.9 25.1-56 56-56h400c30.9 0 56 25.1 56 56v296h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16zm384-48c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16v48h128z"})
);

export default LanBlackboard;
