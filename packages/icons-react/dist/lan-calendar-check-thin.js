import React from 'react';

export const LanCalendarCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M328 0c4.4 0 8 3.6 8 8v56h48c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h48V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h192V8c0-4.4 3.6-8 8-8M64 80c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48h-48v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H128v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V80zm257.4 104.4c2.6-3.6 7.6-4.3 11.2-1.8s4.4 7.6 1.8 11.2L198.5 380.7c-1.4 1.9-3.5 3.1-5.8 3.3s-4.6-.7-6.3-2.3l-72-72c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l65.3 65.3z"})
);

export default LanCalendarCheckThin;
