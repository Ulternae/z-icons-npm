import React from 'react';

export function LanArrowDownZA({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m235.3 379.3-96 96c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7V48c0-8.8 7.2-16 16-16s16 7.2 16 16v377.4l68.7-68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M312 32h144c6.3 0 12 3.7 14.6 9.5s1.5 12.5-2.7 17.2L347.9 192H456c8.8 0 16 7.2 16 16s-7.2 16-16 16H312c-6.3 0-12-3.7-14.6-9.5s-1.5-12.5 2.7-17.2L420.1 64H312c-8.8 0-16-7.2-16-16s7.2-16 16-16m86.3 264.8 63.9 127.7.3.6 15.8 31.7c4 7.9.7 17.5-7.2 21.5s-17.5.7-21.5-7.2L438 447.9H329.8l-11.6 23.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l15.8-31.7.3-.6 63.9-127.7c2.7-5.4 8.2-8.8 14.3-8.8s11.6 3.4 14.3 8.8zM422.1 416 384 339.8 345.9 416z"})
  );
}

export default LanArrowDownZA;
