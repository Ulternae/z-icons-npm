import React from 'react';

export const LanChevronDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M235.3 411.3c-6.2 6.2-16.4 6.2-22.6 0l-208-208c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L224 377.4l196.7-196.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"})
);

export default LanChevronDown;
