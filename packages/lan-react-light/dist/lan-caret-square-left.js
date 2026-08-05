import React from 'react';

export function LanCaretSquareLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 416c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32zm32 64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm64-224c0-9.6 4-18.7 11-25.2l102.8-95.5c5.1-4.7 11.8-7.3 18.7-7.3 15.2 0 27.5 12.3 27.5 27.5v201c0 15.2-12.3 27.5-27.5 27.5-6.9 0-13.6-2.6-18.7-7.3L139 281.2c-7-6.5-11-15.6-11-25.2m32.7 1.7 95.3 88.4V165.8l-95.3 88.4c-.5.4-.7 1.1-.7 1.7s.3 1.3.7 1.7z"})
  );
}

export default LanCaretSquareLeft;
