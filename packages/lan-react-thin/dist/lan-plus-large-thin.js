import React from 'react';

export function LanPlusLargeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M264 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v240H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h240v240c0 4.4 3.6 8 8 8s8-3.6 8-8V264h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H264z"})
  );
}

export default LanPlusLargeThin;
