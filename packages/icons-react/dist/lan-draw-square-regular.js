import React from 'react';

export const LanDrawSquareRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M40 64a24 24 0 1 1 48 0 24 24 0 1 1-48 0m48 59.3c16-6.5 28.9-19.3 35.3-35.3h265.3c6.5 16 19.3 28.9 35.3 35.3v265.3c-16 6.5-28.9 19.3-35.3 35.3H123.3c-6.5-16-19.3-28.9-35.3-35.3zM123.3 40C113.9 16.5 90.9 0 64 0 28.7 0 0 28.7 0 64c0 26.9 16.5 49.9 40 59.3v265.3c-23.5 9.5-40 32.5-40 59.3 0 35.3 28.7 64 64 64 26.9 0 49.9-16.5 59.3-40h265.3c9.5 23.5 32.5 40 59.3 40 35.3 0 64-28.7 64-64 0-26.9-16.5-49.9-40-59.3V123.3c23.5-9.5 40-32.5 40-59.3 0-35.3-28.7-64-64-64C421 0 398 16.5 388.6 40zM64 424a24 24 0 1 1 0 48 24 24 0 1 1 0-48m384 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-384a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanDrawSquareRegular;
