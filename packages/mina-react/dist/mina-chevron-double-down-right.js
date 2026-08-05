import React from 'react';

export function MinaChevronDoubleDownRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9.257 17.743h8.486V9.257"}), React.createElement("path", {"d":"M5.257 13.743h8.486V5.257"})
  );
}

export default MinaChevronDoubleDownRight;
