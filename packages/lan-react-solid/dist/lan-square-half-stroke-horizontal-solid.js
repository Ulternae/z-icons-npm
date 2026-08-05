import React from 'react';

export function LanSquareHalfStrokeHorizontalSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m0 96 .3-6.5C3.6 57.2 30.9 32 64 32h320l6.5.3c30.1 3.1 54.1 27 57.1 57.1l.3 6.5v320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zm384 160V96H64v160z"})
  );
}

export default LanSquareHalfStrokeHorizontalSolid;
