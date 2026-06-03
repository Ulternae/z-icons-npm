import React from 'react';

export const LanCalendarCircleUserThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H96c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h161.4c-2.4-5.2-4.6-10.6-6.5-16H96c-26.5 0-48-21.5-48-48V192h432v-64c0-35.3-28.7-64-64-64h-48V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H160zm-16 72v24c0 4.4 3.6 8 8 8s8-3.6 8-8V80h192v24c0 4.4 3.6 8 8 8s8-3.6 8-8V80h48c26.5 0 48 21.5 48 48v48H48v-48c0-26.5 21.5-48 48-48zm365.9 421.6C488.3 518.2 461.3 528 432 528s-56.3-9.8-77.9-26.4l3.3-6.6c9.5-19 28.9-31 50.1-31h48.9c21.2 0 40.6 12 50.1 31l3.3 6.6zm12.4-10.9-1.5-2.9a71.96 71.96 0 0 0-64.4-39.8h-48.9c-27.3 0-52.2 15.4-64.4 39.8l-1.5 2.9c-23.3-23.2-37.7-55.3-37.7-90.7 0-70.7 57.3-128 128-128s128 57.3 128 128c0 35.5-14.4 67.5-37.7 90.7zM576 400a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
);

export default LanCalendarCircleUserThin;
