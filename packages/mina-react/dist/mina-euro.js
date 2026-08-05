import React from 'react';

export function MinaEuro({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14 10H7.12m0 0H4m3.12 0c.55-4.254 3.01-6 7.38-6 2.418 0 4.251.535 5.5 1.733M7.12 10Q7 10.92 7 12t.12 2M14 14H7.12m0 0H4m3.12 0c.55 4.254 3.01 6 7.38 6 2.418 0 4.251-.535 5.5-1.733"})
  );
}

export default MinaEuro;
