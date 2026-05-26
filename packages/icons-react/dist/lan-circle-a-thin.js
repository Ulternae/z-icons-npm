import React from 'react';

export const LanCircleAThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-352c-3 0-5.8 1.7-7.2 4.4l-88 176c-2 4-.4 8.8 3.6 10.7s8.8.4 10.7-3.6l21.8-43.6H315l21.8 43.6c2 4 6.8 5.6 10.7 3.6s5.6-6.8 3.6-10.7l-88-176c-1.4-2.7-4.1-4.4-7.2-4.4zm0 25.9L307.1 288H204.9z"})
);

export default LanCircleAThin;
