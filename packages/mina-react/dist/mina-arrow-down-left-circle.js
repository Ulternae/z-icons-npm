import React from 'react';

export function MinaArrowDownLeftCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m15.182 8.818-6.364 6.364m4.95 0h-4.95v-4.95"}), React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
  );
}

export default MinaArrowDownLeftCircle;
