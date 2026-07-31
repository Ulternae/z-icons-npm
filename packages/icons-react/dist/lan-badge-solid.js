import React from 'react';

export const LanBadgeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M340.9 51.1C324.8 20.7 292.8 0 256 0s-68.8 20.7-84.9 51.1C138.2 41 101 49 75 75s-34 63.3-23.9 96.1C20.7 187.2 0 219.2 0 256s20.7 68.8 51.1 84.9C41 373.8 49 411 75 437s63.3 34 96.1 23.9c16.1 30.4 48.1 51.1 84.9 51.1s68.8-20.7 84.9-51.1C373.8 471 411 463 437 437s34-63.3 23.9-96.1c30.4-16.1 51.1-48.1 51.1-84.9s-20.7-68.8-51.1-84.9C471 138.2 463 101 437 75s-63.3-34-96.1-23.9"})
);

export default LanBadgeSolid;
