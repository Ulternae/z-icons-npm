import React from 'react';

export function LanRoad({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32.9 417.1c-.6 2.1-.9 4.2-.9 6.4C32 437 43 448 56.5 448H240v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64h183.5c13.5 0 24.5-11 24.5-24.5 0-2.2-.3-4.3-.9-6.4L389.9 87.6C386.1 73.7 373.5 64 359 64h-87v64c0 8.8-7.2 16-16 16s-16-7.2-16-16V64h-87c-14.5 0-27.1 9.7-30.9 23.6zM2 408.7 91.2 79.3C98.8 51.4 124.1 32 153 32h206c28.9 0 54.2 19.4 61.8 47.3L510 408.7c1.3 4.8 2 9.8 2 14.8 0 31.2-25.3 56.5-56.5 56.5h-399C25.3 480 0 454.7 0 423.5c0-5 .7-10 2-14.8M272 224v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16"})
  );
}

export default LanRoad;
