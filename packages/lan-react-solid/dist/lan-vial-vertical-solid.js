import React from 'react';

export function LanVialVerticalSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 32C16 14.3 30.3 0 48 0h224c17.7 0 32 14.3 32 32s-14.3 32-32 32v336c0 61.9-50.1 112-112 112S48 461.9 48 400V64c-17.7 0-32-14.3-32-32m96 32v128h96V64z"})
  );
}

export default LanVialVerticalSolid;
