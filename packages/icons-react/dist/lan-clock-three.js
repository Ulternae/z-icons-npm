import React from 'react';

export const LanClockThree = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 1-448 0 224 224 0 1 1 448 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m240-144v144c0 8.8 7.2 16 16 16h112c8.8 0 16-7.2 16-16s-7.2-16-16-16h-96V112c0-8.8-7.2-16-16-16s-16 7.2-16 16"})
);

export default LanClockThree;
