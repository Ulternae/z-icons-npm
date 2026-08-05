import React from 'react';

export function LanPrintMagnifyingGlassRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576.05 528.013',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 106.5c0-4.2-1.7-8.3-4.7-11.3l-42.5-42.5c-3-3-7.1-4.7-11.3-4.7H144c-8.8 0-16 7.2-16 16v80H80V64c0-35.3 28.7-64 64-64h181.5c17 0 33.3 6.7 45.3 18.7l42.5 42.5c12 12 18.7 28.3 18.7 45.3V144h-48zM240.2 368H144v96h132.1c16 20.3 36.7 36.8 60.3 48H128c-17.7 0-32-14.3-32-32v-64H32c-17.7 0-32-14.3-32-32V256c0-35.3 28.7-64 64-64h344c-45.8 0-87.3 18.3-117.6 48H64c-8.8 0-16 7.2-16 16v112h48v-16c0-17.7 14.3-32 32-32h116.8c-3.1 12.8-4.8 26.2-4.8 40 0 2.7.1 5.4.2 8M408 432.1a72 72 0 1 0 0-144 72 72 0 1 0 0 144m0 48c-66.3 0-120-53.7-120-120s53.7-120 120-120 120 53.7 120 120c0 24.5-7.3 47.2-19.9 66.2l60.9 60.8c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-60.8-60.9c-19 12.6-41.7 19.9-66.2 19.9z"})
  );
}

export default LanPrintMagnifyingGlassRegular;
