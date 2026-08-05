import React from 'react';

export function LanTransporter6Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M240-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16zm-96 256c-8.8 0-16 7.2-16 16s7.2 16 16 16h288c8.8 0 16-7.2 16-16s-7.2-16-16-16zm8 272c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24zM64 32 56.7 6.6C55.6 2.7 52.1 0 48 0s-7.6 2.7-8.7 6.6L32 32 6.6 39.3C2.7 40.4 0 43.9 0 48s2.7 7.6 6.6 8.7L32 64l7.3 25.4c1.1 3.9 4.6 6.6 8.7 6.6s7.6-2.7 8.7-6.6L64 64l25.4-7.3c3.9-1.1 6.6-4.6 6.6-8.7s-2.7-7.6-6.6-8.7zm472.7 326.6c-1.1-3.9-4.7-6.6-8.7-6.6s-7.6 2.7-8.7 6.6L512 384l-25.4 7.3c-3.9 1.1-6.6 4.7-6.6 8.7s2.7 7.6 6.6 8.7L512 416l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L544 416l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7L544 384z"})
  );
}

export default LanTransporter6Solid;
