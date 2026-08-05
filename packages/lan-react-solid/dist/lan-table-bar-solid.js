import React from 'react';

export function LanTableBarSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 416h64c17.7 0 32 14.3 32 32s-14.3 32-32 32H128c-17.7 0-32-14.3-32-32s14.3-32 32-32h64V208h64zM384 32c35.3 0 64 28.7 64 64v32c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V96c0-35.3 28.7-64 64-64z"})
  );
}

export default LanTableBarSolid;
