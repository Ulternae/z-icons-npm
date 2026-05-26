import React from 'react';

export const LanCalendarPlusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M120 0c4.4 0 8 3.6 8 8v56h192V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h48c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h48V8c0-4.4 3.6-8 8-8m-8 104V80H64c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48h-48v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H128v24c0 4.4-3.6 8-8 8s-8-3.6-8-8m112 80c4.4 0 8 3.6 8 8v72h72c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v72c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72h-72c-4.4 0-8-3.6-8-8s3.6-8 8-8h72v-72c0-4.4 3.6-8 8-8"})
);

export default LanCalendarPlusThin;
