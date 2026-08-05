import React from 'react';

export function LanBorderRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128-64c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32s-32-14.3-32-32V64c0-17.7 14.3-32 32-32m-96 416c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m-128 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m-128 0c0 17.7-14.3 32-32 32S0 465.7 0 448s14.3-32 32-32 32 14.3 32 32M32 224a32 32 0 1 1 0-64 32 32 0 1 1 0 64M0 320a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
  );
}

export default LanBorderRightSolid;
