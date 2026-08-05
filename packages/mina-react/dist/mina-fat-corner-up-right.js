import React from 'react';

export function MinaFatCornerUpRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M3 19.923q3.303-4.216 5.866-4.785 2.564-.569 4.88-.172V20L21 11.786 13.747 4v4.784Q9.46 8.82 6.46 12T3 19.923"})
  );
}

export default MinaFatCornerUpRight;
