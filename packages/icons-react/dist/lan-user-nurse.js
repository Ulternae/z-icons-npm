import React from 'react';

export const LanUserNurse = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -29.1 448 541.2',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 96h-80V80h16c4.4 0 8-3.6 8-8V56c0-4.4-3.6-8-8-8h-16V32c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v16h-16c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h16v16h-80V44.9l96-42 96 42zM115.2 15.6C103.5 20.7 96 32.2 96 44.9V144c0 70.7 57.3 128 128 128s128-57.3 128-128V44.9c0-12.7-7.5-24.2-19.2-29.3l-96-42c-8.2-3.6-17.5-3.6-25.7 0l-96 42zM128 128h192v16c0 53-43 96-96 96s-96-43-96-96zm28.1 184.8c-3.8-4.4-9.6-6.4-15.3-5.2C60.5 323.9 0 394.9 0 480.1v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-66.4 45-122.4 106.2-139l73.7 85.4c3 3.5 7.5 5.6 12.1 5.6s9.1-2 12.1-5.6l73.7-85.5C371 357.6 416 413.6 416 480v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-85.2-60.5-156.2-140.8-172.5-5.7-1.2-11.5.8-15.3 5.2L224 391.4l-67.9-78.7z"})
);

export default LanUserNurse;
