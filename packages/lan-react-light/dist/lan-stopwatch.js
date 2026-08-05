import React from 'react';

export function LanStopwatch({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 16c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48.6c53.4 4.1 101.2 28.3 135.7 65.1l29-29c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-31.5 31.5C418.6 204.2 432 244.5 432 288c0 114.9-93.1 208-208 208S16 402.9 16 288c0-109.5 84.6-199.2 192-207.4V32h-48c-8.8 0-16-7.2-16-16M48 288a176 176 0 1 0 352 0 176 176 0 1 0-352 0m176-120c8.8 0 16 7.2 16 16v104c0 8.8-7.2 16-16 16s-16-7.2-16-16V184c0-8.8 7.2-16 16-16"})
  );
}

export default LanStopwatch;
