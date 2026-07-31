import React from 'react';

export const LanChevronCircleDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 480a224 224 0 1 1 0-448 224 224 0 1 1 0 448m0-480a256 256 0 1 0 0 512 256 256 0 1 0 0-512M132.7 235.3l112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L256 313.4 155.3 212.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6"})
);

export default LanChevronCircleDown;
