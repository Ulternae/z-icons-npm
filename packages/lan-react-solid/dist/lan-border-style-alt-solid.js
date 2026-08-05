import React from 'react';

export function LanBorderStyleAltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m160 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0M64 320a32 32 0 1 0-64 0 32 32 0 1 0 64 0M32 160a32 32 0 1 0 0 64 32 32 0 1 0 0-64m416-96c0-17.7-14.3-32-32-32s-32 14.3-32 32v352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h352c35.3 0 64-28.7 64-64z"})
  );
}

export default LanBorderStyleAltSolid;
