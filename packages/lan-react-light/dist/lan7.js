import React from 'react';

export function Lan7({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 48c0-8.8 7.2-16 16-16h288c5.8 0 11.1 3.1 14 8.2s2.7 11.3-.3 16.2l-256 416c-4.6 7.5-14.5 9.9-22 5.2s-9.9-14.5-5.2-22L275.4 64H16C7.2 64 0 56.8 0 48"})
  );
}

export default Lan7;
