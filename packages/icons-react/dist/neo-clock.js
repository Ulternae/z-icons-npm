import React from 'react';

export const NeoClock = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M308 140c0-15.5-12.5-28-28-28s-28 12.5-28 28v116.8c0 22.3 8.9 43.6 24.6 59.4l67.6 67.6c10.9 10.9 28.7 10.9 39.6 0s10.9-28.7 0-39.6l-67.6-67.6c-5.3-5.3-8.2-12.4-8.2-19.8zM280 0C197 0 126.4 26.5 76.5 76.5S0 197 0 280s26.5 153.6 76.5 203.5S197 560 280 560s153.6-26.5 203.5-76.5S560 363 560 280s-26.5-153.6-76.5-203.5S363 0 280 0M56 280c0-71 22.5-126.4 60-164s93-60 164-60 126.4 22.5 164 60 60 93 60 164-22.5 126.4-60 164-93 60-164 60-126.4-22.5-164-60-60-93-60-164"})
);

export default NeoClock;
