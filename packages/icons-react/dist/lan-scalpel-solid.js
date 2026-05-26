import React from 'react';

export const LanScalpelSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 368 0 480h87.1c67.9 0 133-27 181-75l37-37H111.9zm48-48h203.6c33.7-.2 66-13.6 89.8-37.5l128-128c17-17 26.5-40 26.5-64 0-50-40.5-90.5-90.5-90.5-24 0-47 9.5-64 26.5z"})
);

export default LanScalpelSolid;
