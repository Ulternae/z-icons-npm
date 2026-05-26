import React from 'react';

export const LanSuitcaseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M200 48h112c4.4 0 8 3.6 8 8v40H192V56c0-4.4 3.6-8 8-8m-56 8v424h224V56c0-30.9-25.1-56-56-56H200c-30.9 0-56 25.1-56 56m272 40v384h32c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zM96 480V96H64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64z"})
);

export default LanSuitcaseSolid;
