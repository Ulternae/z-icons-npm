import React from 'react';

export function MinaChevronDoubleUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m18 12-6-6-6 6m12 6-6-6-6 6"})
  );
}

export default MinaChevronDoubleUp;
