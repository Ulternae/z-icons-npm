import React from 'react';

export function LanToggleLargeOnSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 64C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm192 64a128 128 0 1 1 0 256 128 128 0 1 1 0-256"})
  );
}

export default LanToggleLargeOnSolid;
