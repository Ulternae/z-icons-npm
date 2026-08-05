import React from 'react';

export function LanCalendarTimes({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 0c8.8 0 16 7.2 16 16v48h192V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16m272 96H64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32M156.7 204.7c6.2-6.2 16.4-6.2 22.6 0l44.7 44.7 44.7-44.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L246.6 272l44.7 44.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 294.6l-44.7 44.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l44.7-44.7-44.7-44.7c-6.2-6.2-6.2-16.4 0-22.6"})
  );
}

export default LanCalendarTimes;
