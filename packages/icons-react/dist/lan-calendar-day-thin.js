import React from 'react';

export const LanCalendarDayThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M120 0c4.4 0 8 3.6 8 8v56h192V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h48c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h48V8c0-4.4 3.6-8 8-8m-8 104V80H64c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48h-48v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H128v24c0 4.4-3.6 8-8 8s-8-3.6-8-8m16 152c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32zm-48 32c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v64c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48z"})
);

export default LanCalendarDayThin;
