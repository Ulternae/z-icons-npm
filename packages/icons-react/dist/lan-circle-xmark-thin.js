import React from 'react';

export const LanCircleXmarkThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-93.7-349.7c-3.1 3.1-3.1 8.2 0 11.3l82.3 82.3-82.3 82.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l82.3-82.3 82.3 82.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-82.3-82.3 82.3-82.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-82.3 82.3-82.3-82.3c-3.1-3.1-8.2-3.1-11.3 0"})
);

export default LanCircleXmarkThin;
