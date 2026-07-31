import React from 'react';

export const LanCrosshairsSimple = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M479.4 240H384c-8.8 0-16 7.2-16 16s7.2 16 16 16h95.4C471.6 383 383 471.6 272 479.4V384c0-8.8-7.2-16-16-16s-16 7.2-16 16v95.4C129 471.6 40.4 383 32.6 272H128c8.8 0 16-7.2 16-16s-7.2-16-16-16H32.6C40.4 129 129 40.4 240 32.6V128c0 8.8 7.2 16 16 16s16-7.2 16-16V32.6C383 40.4 471.6 129 479.4 240M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0"})
);

export default LanCrosshairsSimple;
