import React from 'react';

export const CoreMoneyBillWaveSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 28.3c96-24.5 192-48.9 288 0v403.3c0 23.9-25.6 39.7-48.7 33.4-79.8-21.8-159.6-1.5-239.3 18.9-96 24.5-192 48.9-288 0V80.5c0-23.9 25.6-39.7 48.7-33.4 79.7 21.8 159.5 1.5 239.3-18.8m0 315.7a88 88 0 1 0 0-176 88 88 0 1 0 0 176"})
);

export default CoreMoneyBillWaveSolid;
