import React from 'react';

export const LanFaceMeh = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 1-448 0 224 224 0 1 1 448 0M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-80 232a24 24 0 1 0 0-48 24 24 0 1 0 0 48m184-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0M176 320c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanFaceMeh;
