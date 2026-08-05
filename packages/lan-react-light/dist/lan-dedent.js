import React from 'react';

export function LanDedent({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H16C7.2 48 0 55.2 0 64m192 128c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H208c-8.8 0-16 7.2-16 16m16 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16zM0 448c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16m96-236.2v88.4L42.3 256zM7 243.6C-.8 250-.8 262 7 268.4l94.8 78.1c10.4 8.6 26.2 1.2 26.2-12.4V177.9c0-13.5-15.7-20.9-26.2-12.4z"})
  );
}

export default LanDedent;
