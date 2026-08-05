import React from 'react';

export function LanHeadSideCoughSlashRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-0.05 -32 576.1 576.013',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M200 512c48.6 0 88-39.4 88-88v-66.2l-57.4 57.4 9.4.8v8c0 22.1-17.9 40-40 40h-18.2l-48 48zM37.8 472.3 7 503.1c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L569 9.1c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-211 211-41-41C261.5 43.9 171.7-32 64-32h-8C42.7-32 32-21.3 32-8s10.7 24 24 24h8c86.7 0 158.7 62.6 173.3 145.1.9 4.8 3.2 9.3 6.7 12.8l46.1 46.1L40.3 469.8c-.9.8-1.8 1.6-2.5 2.5M192 176a32 32 0 1 0-64 0 32 32 0 1 0 64 0m320 136a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-40 24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m64 48a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
  );
}

export default LanHeadSideCoughSlashRegular;
