import React from 'react';

export function LanMartiniGlassEmptyThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M.7 36.8C2 33.9 4.8 32 8 32h496c3.2 0 6 1.9 7.3 4.8s.7 6.3-1.4 8.6L264 315.9V496h112c4.4 0 8 3.6 8 8s-3.6 8-8 8H136c-4.4 0-8-3.6-8-8s3.6-8 8-8h112V315.9L2.1 45.4C0 43-.6 39.7.7 36.8M256 300.9 485.9 48H26.1z"})
  );
}

export default LanMartiniGlassEmptyThin;
