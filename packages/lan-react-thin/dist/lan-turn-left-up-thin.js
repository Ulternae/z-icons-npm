import React from 'react';

export function LanTurnLeftUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M180.7 20.7c6.2-6.2 16.4-6.2 22.6 0l128 128c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9h-72c-4.4 0-8 3.6-8 8v168c0 26.5 21.5 48 48 48h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16h-64c-79.5 0-144-64.5-144-144V184c0-4.4-3.6-8-8-8H64c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4zm33.9-11.3c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9S51 192.1 64 192.1h64v160c0 88.4 71.6 160 160 160h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32-14.3-32-32v-160h64c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"})
  );
}

export default LanTurnLeftUpThin;
