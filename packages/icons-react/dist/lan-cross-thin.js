import React from 'react';

export const LanCrossThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v96h96c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32h-96v224c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V256H32c-17.7 0-32-14.3-32-32v-64c0-17.7 14.3-32 32-32h96zm32-16c-8.8 0-16 7.2-16 16v104c0 4.4-3.6 8-8 8H32c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h104c4.4 0 8 3.6 8 8v232c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V248c0-4.4 3.6-8 8-8h104c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16H248c-4.4 0-8-3.6-8-8V32c0-8.8-7.2-16-16-16z"})
);

export default LanCrossThin;
