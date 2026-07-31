import React from 'react';

export const LanOverline = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 32C7.2 32 0 24.8 0 16S7.2 0 16 0h352c8.8 0 16 7.2 16 16s-7.2 16-16 16zm336 288a160 160 0 1 0-320 0 160 160 0 1 0 320 0M0 320a192 192 0 1 1 384 0 192 192 0 1 1-384 0"})
);

export default LanOverline;
