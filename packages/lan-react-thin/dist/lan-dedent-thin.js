import React from 'react';

export function LanDedentThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m192 128c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8H200c-4.4 0-8 3.6-8 8m8 120c-4.4 0-8 3.6-8 8s3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8zM0 448c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8m17.2-192 94.8-78.1v156.2zM7 243.6C-.8 250-.8 262 7 268.4l94.8 78.1c10.4 8.6 26.2 1.2 26.2-12.4V177.9c0-13.5-15.7-20.9-26.2-12.4z"})
  );
}

export default LanDedentThin;
