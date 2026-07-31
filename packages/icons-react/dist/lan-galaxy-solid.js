import React from 'react';

export const LanGalaxySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 0h11.5C342.8 0 352 9.2 352 20.5c0 7.1-3.7 13.7-9.8 17.5l-12.5 7.7c-35.2 21.7-60.9 54.9-73.3 93.1 19.9-7 41.3-10.8 63.5-10.8 106 0 192 86 192 192v11.5c0 11.3-9.2 20.5-20.5 20.5-7.1 0-13.7-3.7-17.5-9.8l-7.7-12.5c-21.7-35.2-54.9-60.9-93.1-73.3 7 19.9 10.8 41.3 10.8 63.5 0 106-86 192-192 192h-11.5c-11.3 0-20.5-9.2-20.5-20.5 0-7.1 3.7-13.7 9.8-17.5l12.5-7.7c35.2-21.7 60.9-54.9 73.3-93.1-19.9 7-41.3 10.8-63.5 10.8-106 0-192-86-192-192v-11.5c0-11.3 9.2-20.5 20.5-20.5 7.1 0 13.7 3.7 17.5 9.8l7.7 12.5c21.7 35.2 54.9 60.9 93.1 73.3-7-19.9-10.8-41.3-10.8-63.5C128 86 214 0 320 0m-64 288a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanGalaxySolid;
