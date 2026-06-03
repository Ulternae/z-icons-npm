import React from 'react';

export const LanCowbellSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M184 32h80c4.4 0 8 3.6 8 8v24h-96V40c0-4.4 3.6-8 8-8m-56 8v24c-28.5.6-53.3 20-60.6 47.7l-66 251c-.9 3.5-1.4 7.1-1.4 10.8C0 397 19 416 42.5 416h363c23.5 0 42.5-19 42.5-42.5 0-3.6-.5-7.3-1.4-10.8l-66-251C373.3 84 348.5 64.6 320 64V40c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56m96 472c32.8 0 61-19.7 73.3-48H150.6c12.3 28.3 40.5 48 73.3 48z"})
);

export default LanCowbellSolid;
