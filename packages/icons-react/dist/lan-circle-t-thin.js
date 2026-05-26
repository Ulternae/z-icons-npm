import React from 'react';

export const LanCircleTThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-88-352c-4.4 0-8 3.6-8 8s3.6 8 8 8h80v168c0 4.4 3.6 8 8 8s8-3.6 8-8V176h80c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanCircleTThin;
