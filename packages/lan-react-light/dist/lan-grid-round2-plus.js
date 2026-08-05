import React from 'react';

export function LanGridRound2Plus({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0M96 448a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0m96-256a64 64 0 1 0 128 0 64 64 0 1 0-128 0m64 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m16 80v64h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16h64v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"})
  );
}

export default LanGridRound2Plus;
