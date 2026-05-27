import React from 'react';

export const CoreGaugeLowSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512M127.8 149.3 208 309.7c-10 11.3-16 26.1-16 42.3 0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64c-1.7 0-3.4.1-5.1.2l-69.5-139-10.8-21.5-42.9 21.5zM96 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m320 0a32 32 0 1 0 0 64 32 32 0 1 0 0-64m-48-112a32 32 0 1 0 0 64 32 32 0 1 0 0-64M256 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default CoreGaugeLowSolid;
