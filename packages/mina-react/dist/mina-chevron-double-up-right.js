import React from 'react';

export function MinaChevronDoubleUpRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M17.743 14.743V6.257H9.257"}), React.createElement("path", {"d":"M13.743 18.743v-8.486H5.257"})
  );
}

export default MinaChevronDoubleUpRight;
