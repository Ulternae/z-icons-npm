import React from 'react';

export function LanPlusThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M232 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v208H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h208v208c0 4.4 3.6 8 8 8s8-3.6 8-8V264h208c4.4 0 8-3.6 8-8s-3.6-8-8-8H232z"})
  );
}

export default LanPlusThin;
