import React from 'react';

export const LanCircleArrowDownLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 0 0 480 240 240 0 1 0 0-480m0 496a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-88-160c-4.4 0-8-3.6-8-8V216c0-4.4 3.6-8 8-8s8 3.6 8 8v108.7l162.3-162.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L187.3 336H296c4.4 0 8 3.6 8 8s-3.6 8-8 8z"})
);

export default LanCircleArrowDownLeftThin;
