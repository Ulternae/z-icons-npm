import React from 'react';

export const LanCircleESolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-368h112c13.3 0 24 10.7 24 24s-10.7 24-24 24h-88v40h72c13.3 0 24 10.7 24 24s-10.7 24-24 24h-72v40h88c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24V168c0-13.3 10.7-24 24-24"})
);

export default LanCircleESolid;
