import React from 'react';

export const NeoCircleCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M409.5 217.9c12.1-9.7 14-27.3 4.4-39.4s-27.3-14-39.4-4.4c-52.5 42-100.2 111.8-123.8 149.3-15.3-20.1-39.5-48.3-67.2-66.8-12.9-8.6-30.3-5.1-38.8 7.8s-5.1 30.3 7.8 38.8c28.9 19.3 55.6 55.9 65.6 70.7 7.4 11 19.9 18 33.8 18 14.4 0 27.6-7.6 34.9-19.9 14.4-24.5 67.2-109.7 122.8-154.2zM280 0C197 0 126.4 26.5 76.5 76.5S0 197 0 280s26.5 153.6 76.5 203.5S197 560 280 560s153.6-26.5 203.5-76.5S560 363 560 280s-26.5-153.6-76.5-203.5S363 0 280 0M56 280c0-71 22.5-126.4 60-164s93-60 164-60 126.4 22.5 164 60 60 93 60 164-22.5 126.4-60 164-93 60-164 60-126.4-22.5-164-60-60-93-60-164"})
);

export default NeoCircleCheck;
