import React from 'react';

export const LanCircleYThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-81.9-349.2c-2.9-3.4-7.9-3.8-11.3-.9s-3.8 7.9-.9 11.3L248 274.9V344c0 4.4 3.6 8 8 8s8-3.6 8-8v-69.1l86.1-101.8c2.9-3.4 2.4-8.4-.9-11.3s-8.4-2.4-11.3.9L256 259.5l-81.9-96.8z"})
);

export default LanCircleYThin;
