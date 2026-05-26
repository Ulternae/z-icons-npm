import React from 'react';

export const LanVideoCameraRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 112c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16h256c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zm-64 16c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm505.6-11.2c4.2-3.1 9.2-4.8 14.4-4.8 13.3 0 24 10.7 24 24v240c0 13.3-10.7 24-24 24-5.2 0-10.2-1.7-14.4-4.8L464 340v-60l64 48V184l-64 48v-60z"})
);

export default LanVideoCameraRegular;
