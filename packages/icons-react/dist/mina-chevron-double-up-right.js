import React from 'react';

export const MinaChevronDoubleUpRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M17.743 14.743V6.257H9.257"}), React.createElement("path", {"d":"M13.743 18.743v-8.486H5.257"})
);

export default MinaChevronDoubleUpRight;
