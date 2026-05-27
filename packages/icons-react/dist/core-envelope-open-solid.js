import React from 'react';

export const CoreEnvelopeOpenSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m256 43.5 186.8 116.7L256 293.6 69.2 160.2zm0-75.5L30.1 109.2C11.4 120.9 0 141.4 0 163.5V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V163.5c0-22.1-11.4-42.6-30.1-54.3z"})
);

export default CoreEnvelopeOpenSolid;
