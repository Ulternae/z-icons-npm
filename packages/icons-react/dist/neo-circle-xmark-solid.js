import React from 'react';

export const NeoCircleXmarkSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M76.5 76.5C126.4 26.5 197 0 280 0s153.6 26.5 203.5 76.5S560 197 560 280s-26.5 153.6-76.5 203.5S363 560 280 560s-153.6-26.5-203.5-76.5S0 363 0 280 26.5 126.4 76.5 76.5m139.3 99.7c-10.9-10.9-28.7-10.9-39.6 0s-10.9 28.7 0 39.6l64.2 64.2-64.2 64.2c-10.9 10.9-10.9 28.7 0 39.6s28.7 10.9 39.6 0l64.2-64.2 64.2 64.2c10.9 10.9 28.7 10.9 39.6 0s10.9-28.7 0-39.6L319.6 280l64.2-64.2c10.9-10.9 10.9-28.7 0-39.6s-28.7-10.9-39.6 0L280 240.4z"})
);

export default NeoCircleXmarkSolid;
