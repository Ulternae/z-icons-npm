import React from 'react';

export const LanSailboat = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M419 304 256 67.9V304zm-195 32H70.4c-15.8 0-24.9-18.1-15.4-30.7L220.2 85.1c2.5-3.3 3.8-7.4 3.8-11.5V15.7C224 7 231 0 239.7 0h.2c6.6 0 12.3 4 14.7 9.8l204.6 296.1c8.8 12.7-.3 30.1-15.8 30.1H256v48h240c8.8 0 16 7.2 16 16 0 61.9-50.1 112-112 112H112C50.1 512 0 461.9 0 400c0-8.8 7.2-16 16-16h208zm0-32V133.3L96 304zM33.6 416c7.4 36.5 39.7 64 78.4 64h288c38.7 0 71-27.5 78.4-64z"})
);

export default LanSailboat;
