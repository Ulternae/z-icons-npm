import React from 'react';

export function CoreCircleDollarSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-24-376h-12c-37.5 0-68 30.4-68 68 0 32.4 22.9 60.3 54.6 66.6l89.4 17.9c9.3 1.9 16 10.1 16 19.6 0 11-8.9 20-20 20H176v48h56v40h48v-40h12c37.5 0 68-30.4 68-68 0-32.4-22.9-60.3-54.6-66.6l-89.4-18c-9.3-1.9-16-10.1-16-19.6 0-11 8.9-20 20-20h116v-48h-56v-40h-48v40z"})
  );
}

export default CoreCircleDollarSolid;
