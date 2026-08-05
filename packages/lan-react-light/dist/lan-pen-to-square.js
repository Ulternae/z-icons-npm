import React from 'react';

export function LanPenToSquare({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m454.6 45.3 12.1 12.1c12.5 12.5 12.5 32.8 0 45.3L440 129.4 382.6 72l26.8-26.7c12.5-12.5 32.8-12.5 45.3 0zM189 265.6 360 94.7l57.4 57.4-171 171c-4.2 4.2-9.6 7.2-15.4 8.6l-65.6 15.1 15.1-65.6c1.3-5.8 4.3-11.2 8.6-15.4zm197.7-243L166.4 243c-8.5 8.5-14.4 19.2-17.1 30.9l-20.9 90.6c-1.2 5.4.4 11 4.3 14.9s9.5 5.5 14.9 4.3l90.6-20.9c11.7-2.7 22.4-8.6 30.9-17.1l220.3-220.4c25-25 25-65.5 0-90.5l-12.1-12.2c-25-25-65.5-25-90.5 0zM80 64C35.8 64 0 99.8 0 144v288c0 44.2 35.8 80 80 80h288c44.2 0 80-35.8 80-80V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v128c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48h128c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
  );
}

export default LanPenToSquare;
