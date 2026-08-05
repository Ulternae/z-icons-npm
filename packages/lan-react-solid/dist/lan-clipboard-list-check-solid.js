import React from 'react';

export function LanClipboardListCheckSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M311.4 32h8.6c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h8.6c11-19.1 31.7-32 55.4-32h128c23.7 0 44.4 12.9 55.4 32M248 112c13.3 0 24-10.7 24-24s-10.7-24-24-24H136c-13.3 0-24 10.7-24 24s10.7 24 24 24zm-92.8 81.1c-8.2-6.7-20.3-5.4-27 2.8l-30.3 37.5-10-12.5c-6.6-8.3-18.7-9.6-27-3s-9.6 18.7-3 27L82.8 276c3.6 4.5 9.1 7.2 14.9 7.2s11.3-2.6 15-7.1l45.3-56c6.7-8.2 5.4-20.3-2.8-27M176 256c0 13.3 10.7 24 24 24h96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96c-13.3 0-24 10.7-24 24m0 128c0 13.3 10.7 24 24 24h96c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96c-13.3 0-24 10.7-24 24m-80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
  );
}

export default LanClipboardListCheckSolid;
