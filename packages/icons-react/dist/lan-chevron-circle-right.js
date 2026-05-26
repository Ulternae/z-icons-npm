import React from 'react';

export const LanChevronCircleRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 1-448 0 224 224 0 1 1 448 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m235.3 123.3 112-112c6.2-6.2 6.2-16.4 0-22.6l-112-112c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L313.4 256 212.7 356.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0"})
);

export default LanChevronCircleRight;
