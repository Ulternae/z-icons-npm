import React from 'react';

export function MinaChevronDownLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M7.879 7.636v8.485h8.485"})
  );
}

export default MinaChevronDownLeft;
