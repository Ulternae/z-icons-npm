import React from 'react';

export function LanStairsSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 64c0-17.7 14.3-32 32-32h128c17.7 0 32 14.3 32 32s-14.3 32-32 32h-96v96c0 17.7-14.3 32-32 32h-96v96c0 17.7-14.3 32-32 32h-96v96c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h96v-96c0-17.7 14.3-32 32-32h96v-96c0-17.7 14.3-32 32-32h96z"})
  );
}

export default LanStairsSolid;
