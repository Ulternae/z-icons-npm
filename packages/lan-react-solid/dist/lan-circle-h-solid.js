import React from 'react';

export function LanCircleHSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m96-344v176c0 13.3-10.7 24-24 24s-24-10.7-24-24v-64h-96v64c0 13.3-10.7 24-24 24s-24-10.7-24-24V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h96v-64c0-13.3 10.7-24 24-24s24 10.7 24 24"})
  );
}

export default LanCircleHSolid;
