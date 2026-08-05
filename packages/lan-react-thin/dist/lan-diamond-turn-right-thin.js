import React from 'react';

export function LanDiamondTurnRightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M28.3 226.3C20.4 234.2 16 244.9 16 256s4.4 21.8 12.3 29.7l198 198c7.9 7.9 18.5 12.3 29.7 12.3s21.8-4.4 29.7-12.3l198-198c7.9-7.9 12.3-18.5 12.3-29.7s-4.4-21.8-12.3-29.7l-198-198C277.8 20.4 267.1 16 256 16s-21.8 4.4-29.7 12.3zM17 215 215 17c10.9-10.9 25.6-17 41-17s30.1 6.1 41 17l198 198c10.9 10.9 17 25.6 17 41s-6.1 30.1-17 41L297 495c-10.9 10.9-25.6 17-41 17s-30.1-6.1-41-17L17 297C6.1 286.1 0 271.4 0 256s6.1-30.1 17-41m292.7-68.7 72 72c3.1 3.1 3.1 8.2 0 11.3l-72 72c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l58.3-58.3H232c-17.7 0-32 14.3-32 32v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-26.5 21.5-48 48-48h124.7l-58.3-58.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0z"})
  );
}

export default LanDiamondTurnRightThin;
