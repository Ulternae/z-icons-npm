import React from 'react';

export function LanBorderInnerThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M216 472c0 4.4 3.6 8 8 8s8-3.6 8-8V264h208c4.4 0 8-3.6 8-8s-3.6-8-8-8H232V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v208H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h208zm-184-8a16 16 0 1 0 0-32 16 16 0 1 0 0 32m384 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 368a16 16 0 1 0 0-32 16 16 0 1 0 0 32m384 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32m16-208a16 16 0 1 0-32 0 16 16 0 1 0 32 0M32 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32M432 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0M48 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m288 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 400a16 16 0 1 0 0-32 16 16 0 1 0 0 32M144 64a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-16 400a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
  );
}

export default LanBorderInnerThin;
