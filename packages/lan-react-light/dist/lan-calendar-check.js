import React from 'react';

export function LanCalendarCheck({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 0c8.8 0 16 7.2 16 16v48h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h192V16c0-8.8 7.2-16 16-16M64 96c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zm243.1 86.6c5.2-7.1 15.2-8.7 22.3-3.5s8.7 15.2 3.5 22.3l-128 176c-2.8 3.8-7 6.2-11.7 6.5s-9.3-1.3-12.6-4.6l-64-64c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l50.7 50.7 117-160.8z"})
  );
}

export default LanCalendarCheck;
