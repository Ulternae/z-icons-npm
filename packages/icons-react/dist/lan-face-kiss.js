import React from 'react';

export const LanFaceKiss = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m240 24c0-8.8 7.2-16 16-16h16c26.5 0 48 21.5 48 48 0 12.3-4.6 23.5-12.2 32 7.6 8.5 12.2 19.7 12.2 32 0 26.5-21.5 48-48 48h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16c-8.8 0-16-7.2-16-16m-88-72a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanFaceKiss;
