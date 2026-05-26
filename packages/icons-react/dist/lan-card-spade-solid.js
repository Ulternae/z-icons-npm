import React from 'react';

export const LanCardSpadeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M320 0c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0zM160 352c-13.3 0-24 10.7-24 24s10.7 24 24 24h64c13.3 0 24-10.7 24-24s-10.7-24-24-24zm49-214.2c-9.4-9.4-24.6-9.4-33.9 0l-86.7 86.6c-21.9 21.9-21.9 57.3 0 79.2s57.3 21.9 79.2 0l7.4-7.4c9.4-9.4 24.6-9.4 33.9 0l7.4 7.4c21.9 21.9 57.3 21.9 79.2 0s21.9-57.3 0-79.2z"})
);

export default LanCardSpadeSolid;
