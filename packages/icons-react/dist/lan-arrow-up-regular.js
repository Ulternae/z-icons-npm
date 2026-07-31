import React from 'react';

export const LanArrowUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M209.5 7c-9.4-9.4-24.6-9.4-33.9 0L7.5 175c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l127-127V488c0 13.3 10.7 24 24 24s24-10.7 24-24V81.9l127 127c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanArrowUpRegular;
