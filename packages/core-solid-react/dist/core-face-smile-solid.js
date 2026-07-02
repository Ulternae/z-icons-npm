import React from 'react';

export function CoreFaceSmileSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-152c38.5 0 72.1-20.9 90.1-52l41.5 24c-26.2 45.4-75.4 76-131.7 76s-105.4-30.6-131.6-76l41.5-24c18 31.1 51.6 52 90.1 52zM144 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default CoreFaceSmileSolid;
