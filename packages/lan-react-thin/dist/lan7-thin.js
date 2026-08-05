import React from 'react';

export function Lan7Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 40c0-4.4 3.6-8 8-8h304c2.9 0 5.6 1.6 7 4.1s1.3 5.7-.2 8.1l-272 432c-2.4 3.7-7.3 4.9-11 2.5s-4.9-7.3-2.5-11L297.5 48H8c-4.4 0-8-3.6-8-8"})
  );
}

export default Lan7Thin;
