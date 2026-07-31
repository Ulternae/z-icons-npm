import React from 'react';

export const LanArrowUpRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 64c8.8 0 16 7.2 16 16v256c0 8.8-7.2 16-16 16s-16-7.2-16-16V118.6L27.3 443.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L329.4 96H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
);

export default LanArrowUpRight;
