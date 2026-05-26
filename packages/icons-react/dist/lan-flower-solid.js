import React from 'react';

export const LanFlowerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 480c38.2 0 72.5-16.8 96-43.3 23.5 26.6 57.8 43.3 96 43.3 70.7 0 128-57.3 128-128 0-38.2-16.8-72.5-43.3-96 26.6-23.5 43.3-57.8 43.3-96 0-70.7-57.3-128-128-128-38.2 0-72.5 16.8-96 43.3C200.5 48.7 166.2 32 128 32 57.3 32 0 89.3 0 160c0 38.2 16.8 72.5 43.3 96C16.7 279.5 0 313.8 0 352c0 70.7 57.3 128 128 128m96-304a80 80 0 1 1 0 160 80 80 0 1 1 0-160"})
);

export default LanFlowerSolid;
