import React from 'react';

export const LanFaceMehRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 1-416 0 208 208 0 1 1 416 0M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-80 240a32 32 0 1 0 0-64 32 32 0 1 0 0 64m192-32a32 32 0 1 0-64 0 32 32 0 1 0 64 0M184 320c-13.3 0-24 10.7-24 24s10.7 24 24 24h144c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanFaceMehRegular;
