import React from 'react';

export const LanCalendarPenThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M120 0c4.4 0 8 3.6 8 8v56h192V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h48c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h48V8c0-4.4 3.6-8 8-8m-8 104V80H64c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48h-48v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H128v24c0 4.4-3.6 8-8 8s-8-3.6-8-8m152.4 90.9L143.1 316.3c-5.1 5.1-8.8 11.5-10.5 18.6l-12.4 49.4c-1.1 4.5 3.1 8.7 7.6 7.6l49.4-12.3c7-1.8 13.5-5.4 18.6-10.5l121.3-121.5c7-7 10.9-16.5 10.9-26.3 0-20.6-16.7-37.3-37.3-37.3-9.9 0-19.4 3.9-26.3 10.9m26.3-26.9c29.4 0 53.3 23.8 53.3 53.3 0 14.1-5.6 27.7-15.6 37.7L207.1 380.3c-7.2 7.2-16.2 12.3-26 14.7l-49.4 12.4c-15.9 4-30.9-11.1-27-27L117 331c2.5-9.8 7.6-18.8 14.7-26l121.4-121.4c10-10 23.5-15.6 37.7-15.6z"})
);

export default LanCalendarPenThin;
