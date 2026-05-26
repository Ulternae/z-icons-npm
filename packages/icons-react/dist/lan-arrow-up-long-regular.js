import React from 'react';

export const LanArrowUpLongRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M177.5-25c-9.4-9.4-24.6-9.4-33.9 0L7.5 111c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l95-95V520c0 13.3 10.7 24 24 24s24-10.7 24-24V49.9l95 95c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanArrowUpLongRegular;
