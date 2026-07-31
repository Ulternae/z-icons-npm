import React from 'react';

export const NeoCircleCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M76.5 76.5C126.4 26.5 197 0 280 0s153.6 26.5 203.5 76.5S560 197 560 280s-26.5 153.6-76.5 203.5S363 560 280 560s-153.6-26.5-203.5-76.5S0 363 0 280 26.5 126.4 76.5 76.5m333 141.4c12.1-9.7 14-27.3 4.4-39.4s-27.3-14-39.4-4.4c-52.5 42-100.2 111.8-123.8 149.3-15.3-20.1-39.5-48.3-67.2-66.8-12.9-8.6-30.3-5.1-38.8 7.8s-5.1 30.3 7.8 38.8c28.9 19.3 55.6 55.9 65.6 70.7 7.4 11 19.9 18 33.8 18 14.4 0 27.6-7.6 34.9-19.9 14.4-24.5 67.2-109.7 122.8-154.2z"})
);

export default NeoCircleCheckSolid;
