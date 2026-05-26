import React from 'react';

export const LanTripleChevronsLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M140.3 103.2c12.6-10.2 31.1-9.5 42.8 2.2s12.4 30.2 2.2 42.8l-2.2 2.4L77.8 256l105.3 105.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.2 0l-128-128-2.2-2.4c-10.3-12.6-9.5-31.1 2.2-42.8l128-128 2.4-2.2zm192 0c12.6-10.2 31.1-9.5 42.8 2.2s12.4 30.2 2.2 42.8l-2.2 2.4L269.7 256l105.4 105.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128-2.2-2.4c-10.3-12.6-9.5-31.1 2.2-42.8l128-128 2.4-2.2zm192 0c12.6-10.2 31.1-9.5 42.8 2.2s12.4 30.2 2.2 42.8l-2.2 2.4L461.7 256l105.4 105.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0l-128-128-2.2-2.4c-10.3-12.6-9.5-31.1 2.2-42.8l128-128 2.4-2.2z"})
);

export default LanTripleChevronsLeftSolid;
