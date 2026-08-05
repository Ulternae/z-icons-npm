import React from 'react';

export function LanFlashlightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M576 416h32c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32h-32zM528 99.9C441.8 113.7 384 160 384 160H48c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h336s57.8 46.3 144 60.1zM224 256c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32c-17.7 0-32-14.3-32-32"})
  );
}

export default LanFlashlightSolid;
