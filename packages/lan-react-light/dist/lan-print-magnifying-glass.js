import React from 'react';

export function LanPrintMagnifyingGlass({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 528.05',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 144v-37.5c0-8.5-3.4-16.6-9.4-22.6l-42.5-42.5c-6-6-14.1-9.4-22.6-9.4H160c-17.7 0-32 14.3-32 32v80H96V64c0-35.3 28.7-64 64-64h149.5c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3V144zm-74.5 80H64c-17.7 0-32 14.3-32 32v128h64v-32c0-17.7 14.3-32 32-32h116.8c-2.5 10.3-4.1 21-4.6 32H128v128h162.3c13.3 13.1 28.8 23.9 45.8 32H128c-17.7 0-32-14.3-32-32v-64H32c-17.7 0-32-14.3-32-32V256c0-35.3 28.7-64 64-64h344v.1c-36.8 0-70.8 11.8-98.5 31.9M408 448.1a88 88 0 1 0 0-176 88 88 0 1 0 0 176m0 32c-66.3 0-120-53.7-120-120s53.7-120 120-120 120 53.7 120 120c0 27.4-9.1 52.6-24.6 72.7l67.9 68c6.2 6.3 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-67.8-67.9c-20.2 15.4-45.4 24.6-72.8 24.6z"})
  );
}

export default LanPrintMagnifyingGlass;
