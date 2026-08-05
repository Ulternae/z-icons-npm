import React from 'react';

export function LanAngleLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 256 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M20.7 267.3c-6.2-6.2-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 256l148.7 148.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0z"})
  );
}

export default LanAngleLeft;
