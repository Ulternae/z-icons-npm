import React from 'react';

export function LanTurnRightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M491.3 244.7c6.2 6.2 6.2 16.4 0 22.6l-128 128c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8v-72c0-4.4-3.6-8-8-8H160c-26.5 0-48 21.5-48 48v64c0 8.8-7.2 16-16 16H32c-8.8 0-16-7.2-16-16v-64c0-79.5 64.5-144 144-144h168c4.4 0 8-3.6 8-8v-72c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5zm11.3 33.9c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9S319.9 115 319.9 128v64h-160C71.6 192 0 263.6 0 352v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7 14.3-32 32-32h160v64c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"})
  );
}

export default LanTurnRightThin;
