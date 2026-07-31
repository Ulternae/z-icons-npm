import React from 'react';

export const LanChevronDoubleRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m43.3 475.3 208-208c6.2-6.2 6.2-16.4 0-22.6l-208-208c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L217.4 256 20.7 452.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0m192 0 208-208c6.2-6.2 6.2-16.4 0-22.6l-208-208c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L409.4 256 212.7 452.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0"})
);

export default LanChevronDoubleRight;
