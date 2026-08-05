import React from 'react';

export function LanCircle7Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-56-368h112c8.3 0 16 4.3 20.4 11.4s4.8 15.9 1 23.4l-88 176c-5.9 11.9-20.3 16.7-32.2 10.7s-16.7-20.3-10.7-32.2L273.2 192H200c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanCircle7Solid;
