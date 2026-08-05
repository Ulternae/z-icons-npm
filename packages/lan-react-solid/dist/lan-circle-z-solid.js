import React from 'react';

export function LanCircleZSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-368h144c9.3 0 17.7 5.3 21.7 13.7s2.8 18.3-3.1 25.5L234.6 320H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-9.3 0-17.7-5.3-21.7-13.7s-2.8-18.3 3.1-25.5l112-136.8H184c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanCircleZSolid;
