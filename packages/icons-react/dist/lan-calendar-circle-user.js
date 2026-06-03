import React from 'react';

export const LanCalendarCircleUser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H96c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h161.4c-4.7-10.2-8.5-20.9-11.4-32H96c-17.7 0-32-14.3-32-32V192h416v-64c0-35.3-28.7-64-64-64h-32V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H160zM96 96h320c17.7 0 32 14.3 32 32v32H64v-32c0-17.7 14.3-32 32-32m396 398.6c-17.3 11-37.9 17.4-60 17.4s-42.7-6.4-60-17.4c7.8-9.1 19.4-14.6 31.8-14.6h56.4c12.4 0 23.9 5.5 31.8 14.6m24.3-20.8c-13.8-16.1-34.2-25.8-56.1-25.8h-56.4c-21.8 0-42.2 9.6-56.1 25.8-17.3-19.7-27.7-45.5-27.7-73.8 0-61.9 50.1-112 112-112s112 50.1 112 112c0 28.2-10.5 54.1-27.7 73.8M576 400a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-144-48a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112"})
);

export default LanCalendarCircleUser;
