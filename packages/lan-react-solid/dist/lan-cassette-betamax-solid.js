import React from 'react';

export function LanCassetteBetamaxSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64C28.7 64 0 92.7 0 128h512c0-35.3-28.7-64-64-64zm448 112H0v208c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64zM144 336a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-112a80 80 0 1 1 0 160 80 80 0 1 1 0-160m176 0h96c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32"})
  );
}

export default LanCassetteBetamaxSolid;
