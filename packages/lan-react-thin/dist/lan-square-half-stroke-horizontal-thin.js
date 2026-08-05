import React from 'react';

export function LanSquareHalfStrokeHorizontalThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M.3 89.5C3.6 57.2 30.9 32 64 32h320l6.5.3c30.1 3.1 54.1 27 57.1 57.1l.3 6.5v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3H64c-33.1.2-60.4-25-63.7-57.3L0 416V96zM432 248V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v152zM16 416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V264H16z"})
  );
}

export default LanSquareHalfStrokeHorizontalThin;
