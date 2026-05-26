import React from 'react';

export const LanCircle4Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-352c-4.4 0-8 3.6-8 8v80c0 22.1 17.9 40 40 40h88v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-8V168c0-4.4-3.6-8-8-8s-8 3.6-8 8v104h-88c-13.3 0-24-10.7-24-24v-80c0-4.4-3.6-8-8-8"})
);

export default LanCircle4Thin;
