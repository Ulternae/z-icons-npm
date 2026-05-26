import React from 'react';

export const LanCircleSThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-21.5-352c-27.9 0-50.5 22.6-50.5 50.5 0 25.5 19 46.9 44.2 50.1l53.6 6.7c17.3 2.2 30.2 16.8 30.2 34.2 0 19-15.4 34.5-34.5 34.5H200c-4.4 0-8 3.6-8 8s3.6 8 8 8h77.5c27.9 0 50.5-22.6 50.5-50.5 0-25.5-19-46.9-44.2-50.1l-53.6-6.7c-17.3-2.2-30.2-16.8-30.2-34.2 0-19 15.4-34.5 34.5-34.5H304c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanCircleSThin;
