import React from 'react';

export const MinaChevronDoubleDownRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M9.257 17.743h8.486V9.257"}), React.createElement("path", {"d":"M5.257 13.743h8.486V5.257"})
);

export default MinaChevronDoubleDownRight;
