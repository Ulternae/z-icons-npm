import React from 'react';

export function MinaChevronDoubleRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m12 18 6-6-6-6M6 18l6-6-6-6"})
  );
}

export default MinaChevronDoubleRight;
