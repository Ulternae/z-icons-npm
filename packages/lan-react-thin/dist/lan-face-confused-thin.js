import React from 'react';

export function LanFaceConfusedThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m163 136.8-5.6 5.1c-3.3 3-8.3 2.7-11.3-.5s-2.7-8.3.5-11.3l5.6-5.1c54.5-49.5 125.5-77 199.1-77h8.7c4.4 0 8 3.6 8 8s-3.6 8-8 8h-8.7c-69.7 0-136.8 26-188.3 72.8M160 208a16 16 0 1 1 32 0 16 16 0 1 1-32 0m176-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
  );
}

export default LanFaceConfusedThin;
