import React from 'react';

export const LanCodeCompareThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -8.025 512 528.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M202.3-5.7c-3.1 3.1-3.1 8.2 0 11.3L260.7 64H152c-39.8 0-72 32.2-72 72v232.4c-36 4-64 34.5-64 71.6 0 39.8 32.2 72 72 72s72-32.2 72-72c0-37.1-28-67.6-64-71.6V136c0-30.9 25.1-56 56-56h108.7l-58.3 58.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l72-72c3.1-3.1 3.1-8.2 0-11.3l-72-72c-3.1-3.1-8.2-3.1-11.3 0zM480 72a56 56 0 1 1-112 0 56 56 0 1 1 112 0m-64 71.6V376c0 30.9-25.1 56-56 56H251.3l58.3-58.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-72 72c-3.1 3.1-3.1 8.2 0 11.3l72 72c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L251.3 448H360c39.8 0 72-32.2 72-72V143.6c36-4 64-34.5 64-71.6 0-39.8-32.2-72-72-72s-72 32.2-72 72c0 37.1 28 67.6 64 71.6M144 440a56 56 0 1 1-112 0 56 56 0 1 1 112 0"})
);

export default LanCodeCompareThin;
