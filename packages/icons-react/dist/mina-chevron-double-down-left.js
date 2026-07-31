import React from 'react';

export const MinaChevronDoubleDownLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M6.257 9.257v8.486h8.486"}), React.createElement("path", {"d":"M10.257 5.257v8.486h8.486"})
);

export default MinaChevronDoubleDownLeft;
