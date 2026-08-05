import React from 'react';

export function LanValueAbsolute({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 80v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8 7.2-16 16-16s16 7.2 16 16m480 0v352c0 8.8-7.2 16-16 16s-16-7.2-16-16V80c0-8.8 7.2-16 16-16s16 7.2 16 16m-379.3 52.7c6.2-6.2 16.4-6.2 22.6 0L256 233.4l100.7-100.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L278.6 256l100.7 100.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L256 278.6 155.3 379.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L233.4 256 132.7 155.3c-6.2-6.2-6.2-16.4 0-22.6"})
  );
}

export default LanValueAbsolute;
