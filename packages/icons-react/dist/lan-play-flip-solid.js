import React from 'react';

export const LanPlayFlipSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M356.8 36.9c12.4-6.8 27.4-6.5 39.6.7S416 57.9 416 72v368c0 14.1-7.5 27.2-19.6 34.4s-27.2 7.5-39.6.7l-336-184C8 284.1 0 270.6 0 256s8-28.1 20.8-35.1z"})
);

export default LanPlayFlipSolid;
