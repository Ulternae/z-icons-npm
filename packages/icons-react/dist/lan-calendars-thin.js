import React from 'react';

export const LanCalendarsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h192V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32zm256 72H160c-26.5 0-48 21.5-48 48v48h384v-48c0-26.5-21.5-48-48-48M112 352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V192H112zM16 168v280c0 26.5 21.5 48 48 48h344c4.4 0 8 3.6 8 8s-3.6 8-8 8H64c-35.3 0-64-28.7-64-64V168c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanCalendarsThin;
