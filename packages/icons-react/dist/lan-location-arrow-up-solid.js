import React from 'react';

export const LanLocationArrowUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M253.1 18.6C247.8 7.3 236.5 0 224 0s-23.8 7.3-29.1 18.6l-192 416c-5.6 12.2-3.1 26.5 6.4 36s23.8 12.1 36 6.5L224 395.2l178.7 81.9c12.2 5.6 26.5 3 36-6.5s12-23.8 6.4-36z"})
);

export default LanLocationArrowUpSolid;
