import React from 'react';

export function LanGlassMartiniAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M504.5 32c3.2 0 6 1.9 7.3 4.8s.7 6.3-1.4 8.6L264.5 315.9V496h112c4.4 0 8 3.6 8 8s-3.6 8-8 8h-240c-4.4 0-8-3.6-8-8s3.6-8 8-8h112V315.9L2.6 45.4C.5 43-.1 39.6 1.2 36.8S5.3 32 8.5 32zM113.9 144l142.6 156.9L399.1 144zm-14.6-16h314.4l72.7-80H26.6z"})
  );
}

export default LanGlassMartiniAltThin;
