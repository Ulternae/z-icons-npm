import React from 'react';

export function LanSquareDownLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 448c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32zM0 416c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96zm160-196.7 24.7 24.7c3 3 7.1 4.7 11.3 4.7s8.3-1.7 11.3-4.7l64.7-64.7 28.7 28.7-64.7 64.7c-6.2 6.2-6.2 16.4 0 22.6l24.7 24.7H160zM152 352h128c21.2 0 32-26 17-41l-27-27 59-59c9.4-9.4 9.4-24.6 0-33.9l-40-40c-9.4-9.4-24.6-9.4-33.9 0l-59 59-27-27c-15-15-41-4.3-41 17v128c0 13.3 10.7 24 24 24z"})
  );
}

export default LanSquareDownLeft;
