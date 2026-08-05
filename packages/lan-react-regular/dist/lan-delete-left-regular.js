import React from 'react';

export function LanDeleteLeftRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M205.3 64c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zM528 128v256c0 8.8-7.2 16-16 16H205.3c-4.2 0-8.3-1.7-11.3-4.7L54.6 256l139.3-139.3c3-3 7.1-4.7 11.3-4.7H512c8.8 0 16 7.2 16 16m-243.9 60.1c-9.4 9.4-9.4 24.6 0 33.9l33.9 33.9-33.9 33.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l33.9-33.9 33.9 33.9c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-33.9-33.9 33.9-33.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L351.9 222 318 188.1c-9.4-9.4-24.6-9.4-33.9 0"})
  );
}

export default LanDeleteLeftRegular;
