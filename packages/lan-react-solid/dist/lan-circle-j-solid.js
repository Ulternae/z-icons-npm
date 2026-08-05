import React from 'react';

export function LanCircleJSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-344v112c0 48.6-39.4 88-88 88s-88-39.4-88-88c0-13.3 10.7-24 24-24s24 10.7 24 24c0 22.1 17.9 40 40 40s40-17.9 40-40V168c0-13.3 10.7-24 24-24s24 10.7 24 24"})
  );
}

export default LanCircleJSolid;
