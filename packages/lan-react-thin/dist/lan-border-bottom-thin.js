import React from 'react';

export function LanBorderBottomThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 472c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h432c4.4 0 8 3.6 8 8M16 352a16 16 0 1 1 32 0 16 16 0 1 1-32 0m416 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0M16 160a16 16 0 1 1 32 0 16 16 0 1 1-32 0m416 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0M16 256a16 16 0 1 1 32 0 16 16 0 1 1-32 0m416 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0M16 64a16 16 0 1 1 32 0 16 16 0 1 1-32 0m416 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-224 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0m-64 0a16 16 0 1 1-32 0 16 16 0 1 1 32 0m160 0a16 16 0 1 1 32 0 16 16 0 1 1-32 0"})
  );
}

export default LanBorderBottomThin;
