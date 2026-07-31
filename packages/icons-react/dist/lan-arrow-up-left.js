import React from 'react';

export const LanArrowUpLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 64C7.2 64 0 71.2 0 80v256c0 8.8 7.2 16 16 16s16-7.2 16-16V118.6l324.7 324.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L54.6 96H272c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanArrowUpLeft;
