import React from 'react';

export const LanBookmarkCircleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-96-336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v192c0 6.2-3.5 11.8-9.1 14.4s-12.1 1.9-16.9-1.9l-70-56-70 56c-4.8 3.8-11.4 4.6-16.9 1.9s-9.1-8.2-9.1-14.4z"})
);

export default LanBookmarkCircleSolid;
