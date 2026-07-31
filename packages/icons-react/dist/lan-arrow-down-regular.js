import React from 'react';

export const LanArrowDownRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M175.5 505c9.4 9.4 24.6 9.4 33.9 0l168-168c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-127 127V24c0-13.3-10.7-24-24-24s-24 10.7-24 24v406.1l-127-127c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l168 168z"})
);

export default LanArrowDownRegular;
