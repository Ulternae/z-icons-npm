import React from 'react';

export const LanUpRightAndDownLeftFromCenterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M323.3 0C303.8 0 288 15.8 288 35.3c0 9.4 3.7 18.3 10.3 25L326.1 88 264 150.1c-18.7 18.7-18.7 49.1 0 67.9l30.1 30c18.7 18.7 49.1 18.7 67.9 0l62.1-62.1 27.7 27.7c6.6 6.6 15.6 10.3 25 10.3 19.5 0 35.3-15.8 35.3-35.3L512 40c0-22.1-17.9-40-40-40zM377 71l-23-23h110.1v110.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0l-79 79-30.1-30.1 79-79c9.4-9.4 9.4-24.6 0-33.9zM188.7 512c19.5 0 35.3-15.8 35.3-35.3 0-9.4-3.7-18.3-10.3-25L185.9 424l62.1-62.1c18.7-18.7 18.7-49.1 0-67.9l-30.1-30c-18.7-18.7-49.1-18.7-67.9 0l-62 62.1-27.7-27.8c-6.6-6.6-15.6-10.3-25-10.3C15.8 288 0 303.8 0 323.3V472c0 22.1 17.9 40 40 40zM135 441l23 23H47.9V353.9l23 23c9.4 9.4 24.6 9.4 33.9 0l79-79 30.1 30.1-79 79c-9.4 9.4-9.4 24.6 0 33.9z"})
);

export default LanUpRightAndDownLeftFromCenterRegular;
