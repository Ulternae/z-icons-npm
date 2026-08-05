import React from 'react';

export function LanCaretSquareRightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M432 96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zm-48-64c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm-64 224c0 7.3-3 14.3-8.4 19.3L202.4 377.2c-4.7 4.4-10.8 6.8-17.2 6.8-13.9 0-25.2-11.3-25.2-25.2V153.2c0-13.9 11.3-25.2 25.2-25.2 6.4 0 12.5 2.4 17.2 6.8l109.2 101.9c5.4 5 8.4 12 8.4 19.3m-19.3-7.6L191.5 146.5c-1.7-1.6-4-2.5-6.3-2.5-5.1 0-9.2 4.1-9.2 9.2v205.6c0 5.1 4.1 9.2 9.2 9.2 2.3 0 4.6-.9 6.3-2.5l109.2-101.9c2.1-2 3.3-4.7 3.3-7.6s-1.2-5.6-3.3-7.6"})
  );
}

export default LanCaretSquareRightThin;
