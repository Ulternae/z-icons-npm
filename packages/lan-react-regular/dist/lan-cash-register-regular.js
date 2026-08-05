import React from 'react';

export function LanCashRegisterRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 0C60.7 0 32 28.7 32 64s28.7 64 64 64h48v32H87.5c-31.8 0-58.9 23.4-63.4 54.9L.6 379.5q-.6 4.5-.6 9V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-59.5c0-3-.2-6.1-.6-9l-23.6-164.6c-4.5-31.5-31.5-54.9-63.4-54.9H207.9v-32h48c35.3 0 64-28.7 64-64S291.3 0 256 0zm0 48h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16M48 448v-16h416v16c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16m392.3-226.3L463.5 384h-415l23.2-162.3c1.1-7.9 7.9-13.7 15.8-13.7h337c8 0 14.7 5.9 15.8 13.7M112 232a24 24 0 1 0 0 48 24 24 0 1 0 0-48m72 24a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m120-56a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-24 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48"})
  );
}

export default LanCashRegisterRegular;
