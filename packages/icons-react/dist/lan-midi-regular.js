import React from 'react';

export const LanMidiRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m64-416c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V58.1C108.4 85.1 48 163.5 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208c0-92.5-60.4-170.9-144-197.9zm-64 336a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-79.2-51.6a32 32 0 1 1-45.3-45.2 32 32 0 1 1 45.3 45.2m203.6 0a32 32 0 1 1-45.2-45.2 32 32 0 1 1 45.2 45.2M112 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m288 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanMidiRegular;
