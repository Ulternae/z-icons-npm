import React from 'react';

export const CoreCompassSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-23.5-332.1c-27 4.5-48.1 25.7-52.6 52.6L160 352l119.5-19.9c27-4.5 48.1-25.7 52.6-52.6L352 160z"})
);

export default CoreCompassSolid;
