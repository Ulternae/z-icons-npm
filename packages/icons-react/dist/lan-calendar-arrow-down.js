import React from 'react';

export const LanCalendarArrowDown = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 0c8.8 0 16 7.2 16 16v48h192V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16m272 96H64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32M212.7 363.3l-72-72c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l44.7 44.7V192c0-8.8 7.2-16 16-16s16 7.2 16 16v121.4l44.7-44.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0"})
);

export default LanCalendarArrowDown;
