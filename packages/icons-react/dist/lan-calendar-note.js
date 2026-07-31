import React from 'react';

export const LanCalendarNote = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 16c0-8.8-7.2-16-16-16S96 7.2 96 16v48H64C28.7 64 0 92.7 0 128v288c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-32V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H128zM64 96h320c17.7 0 32 14.3 32 32v288c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32m32 144c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16m16 80c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanCalendarNote;
