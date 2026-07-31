import React from 'react';

export const LanCalendarTimeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M152 0c4.4 0 8 3.6 8 8v56h192V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h48c35.3 0 64 28.7 64 64v86c-5.3-1.4-10.6-2.5-16-3.4v-18.7H48v224c0 26.5 21.5 48 48 48h154.9c1.9 5.4 4.1 10.8 6.5 16L96 480c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h48V8c0-4.4 3.6-8 8-8m-8 104V80H96c-26.5 0-48 21.5-48 48v48h416v-48c0-26.5-21.5-48-48-48h-48v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H160v24c0 4.4-3.6 8-8 8s-8-3.6-8-8m288 424a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 64c4.4 0 8 3.6 8 8v64h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-72c0-4.4 3.6-8 8-8"})
);

export default LanCalendarTimeThin;
