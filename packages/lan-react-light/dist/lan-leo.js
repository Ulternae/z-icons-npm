import React from 'react';

export function LanLeo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M257.9 0C327.5 0 384 56.4 384 126.1c0 7.6-.7 15.1-2 22.6l-44.8 246.4c-.8 4.2-1.2 8.6-1.2 12.9 0 39.8 32.2 72.1 72 72.1s72-32.2 72-72v-40c0-8.8 7.2-16 16-16s16 7.2 16 16v40c0 57.4-46.6 104-104 104S304 465.5 304 408c0-6.2.6-12.5 1.7-18.6L350.5 143q1.5-8.4 1.5-16.8c0-51.9-42.1-94.1-94.1-94.1h-2.7c-52.6 0-95.3 42.7-95.3 95.3 0 9.5 1.4 18.9 4.2 28l54.8 178c3.3 10.8 5 22 5 33.3v1.4c0 61.9-50.1 112-112 112S0 429.9 0 368s50.1-112 112-112c19.6 0 38 5 54 13.9l-32.4-105.2c-3.7-12.1-5.6-24.7-5.6-37.4C128 57 185 0 255.3 0h2.7zM112 288a80 80 0 1 0 0 160 80 80 0 1 0 0-160"})
  );
}

export default LanLeo;
