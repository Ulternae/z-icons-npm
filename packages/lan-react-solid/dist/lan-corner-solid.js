import React from 'react';

export function LanCornerSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 192c0-17.7 14.3-32 32-32h416c35.3 0 64 28.7 64 64v128c0 17.7-14.3 32-32 32s-32-14.3-32-32V224H32c-17.7 0-32-14.3-32-32"})
  );
}

export default LanCornerSolid;
