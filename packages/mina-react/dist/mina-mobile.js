import React from 'react';

export function MinaMobile({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M16.286 3H7.714C6.768 3 6 3.806 6 4.8v14.4c0 .994.768 1.8 1.714 1.8h8.572c.947 0 1.714-.806 1.714-1.8V4.8c0-.994-.767-1.8-1.714-1.8M10.5 6h3"})
  );
}

export default MinaMobile;
