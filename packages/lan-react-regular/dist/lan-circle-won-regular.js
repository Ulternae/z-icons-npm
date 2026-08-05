import React from 'react';

export function LanCircleWonRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512M128.7 145.1c-12.6 4-19.6 17.5-15.6 30.2l25.7 80.7H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h21l30.4 95.3c3.2 10.2 12.8 17 23.5 16.7s19.9-7.6 22.6-18l24.3-94h13.7l25.4 94.2c2.8 10.3 12.1 17.6 22.7 17.8s20.2-6.7 23.4-16.9l29.2-95.1H384c8.8 0 16-7.2 16-16s-7.2-16-16-16h-10l24.9-80.9c3.9-12.7-3.2-26.1-15.9-30s-26.1 3.2-30 15.9l-29.2 95.1h-19.3l-25.4-94.2c-2.8-10.5-12.4-17.8-23.3-17.8s-20.4 7.4-23.1 18l-24.3 94h-19.3l-30.4-95.3c-4-12.6-17.5-19.6-30.2-15.6zm71.2 144.2-.4-1.4h.8zm113.7 0-.4-1.4h.8z"})
  );
}

export default LanCircleWonRegular;
