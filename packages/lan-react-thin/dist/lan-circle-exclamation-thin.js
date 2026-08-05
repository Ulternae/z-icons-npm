import React from 'react';

export function LanCircleExclamationThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-496a240 240 0 1 0 0 480 240 240 0 1 0 0-480m0 368a16 16 0 1 1 0-32 16 16 0 1 1 0 32m2.9-255.7c6.6 1.4 11.5 7.4 11.3 14.4L264 304.3c-.2 4.3-3.7 7.7-8 7.7s-7.8-3.4-8-7.7l-6.2-161.6c-.3-8 6.1-14.7 14.2-14.7z"})
  );
}

export default LanCircleExclamationThin;
