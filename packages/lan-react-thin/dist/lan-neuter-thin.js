import React from 'react';

export function LanNeuterThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 176a160 160 0 1 1 320 0 160 160 0 1 1-320 0m168 175.8c93.5-4.2 168-81.3 168-175.8C368 78.8 289.2 0 192 0S16 78.8 16 176c0 94.5 74.5 171.6 168 175.8V504c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
  );
}

export default LanNeuterThin;
