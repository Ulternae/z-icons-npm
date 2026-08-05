import React from 'react';

export function LanUserTag({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 556.325',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352.1 128a96 96 0 1 0-192 0 96 96 0 1 0 192 0m-224 0a128 128 0 1 1 256 0 128 128 0 1 1-256 0m-64 352v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c0-97.2 78.8-176 176-176h97.6c-1.1 5.2-1.6 10.6-1.6 16.1V336h-96c-79.5 0-144 64.5-144 144m320-159.9v92.1c0 4.2 1.7 8.3 4.7 11.3l96 96c6.2 6.2 16.4 6.2 22.6 0l76.1-76.1c6.2-6.2 6.2-16.4 0-22.6l-96-96c-3-3-7.1-4.7-11.3-4.7zm-17.9 126.1c-9-9-14.1-21.2-14.1-33.9v-92.1c0-17.7 14.3-32 32-32h92.1c12.7 0 24.9 5.1 33.9 14.1l96 96c18.7 18.7 18.7 49.1 0 67.9L530 542.3c-18.7 18.7-49.1 18.7-67.9 0l-96-96zm57.9-62.2a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
  );
}

export default LanUserTag;
