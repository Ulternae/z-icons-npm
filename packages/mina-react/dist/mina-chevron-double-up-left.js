import React from 'react';

export function MinaChevronDoubleUpLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14.743 6.257H6.257v8.486"}), React.createElement("path", {"d":"M18.743 10.257h-8.486v8.486"})
  );
}

export default MinaChevronDoubleUpLeft;
