import React from 'react';

export function LanBorderTopThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 40c0-4.4-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8M48 160a16 16 0 1 0-32 0 16 16 0 1 0 32 0m352 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0M48 352a16 16 0 1 0-32 0 16 16 0 1 0 32 0m352 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0M48 256a16 16 0 1 0-32 0 16 16 0 1 0 32 0m352 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0M48 448a16 16 0 1 0-32 0 16 16 0 1 0 32 0m352 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0m-160 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-128 0a16 16 0 1 0 32 0 16 16 0 1 0-32 0m224 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0"})
  );
}

export default LanBorderTopThin;
