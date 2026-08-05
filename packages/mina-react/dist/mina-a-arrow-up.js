import React from 'react';

export function MinaAArrowUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9.5 13.667 7 7l-2.5 6.667m5 0L10.75 17M9.5 13.667h-5M3.25 17l1.25-3.333M17.25 7.5v9m3.5-6L17.25 7l-3.5 3.5"})
  );
}

export default MinaAArrowUp;
