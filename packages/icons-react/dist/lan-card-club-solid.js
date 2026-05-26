import React from 'react';

export const LanCardClubSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 0c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM160 352c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm32-240c-35.3 0-64 28.7-64 64 0 5.6.8 11.1 2.2 16.3-32.6 3-58.2 30.3-58.2 63.7 0 35.3 28.7 64 64 64 24.1 0 45.1-13.4 56-33.1 10.9 19.7 31.9 33.1 56 33.1 35.3 0 64-28.7 64-64 0-33.4-25.6-60.8-58.2-63.7 1.4-5.2 2.2-10.6 2.2-16.3 0-35.3-28.7-64-64-64"})
);

export default LanCardClubSolid;
