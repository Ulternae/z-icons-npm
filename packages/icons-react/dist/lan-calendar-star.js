import React from 'react';

export const LanCalendarStar = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 0c8.8 0 16 7.2 16 16v48h192V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V16c0-8.8 7.2-16 16-16m272 96H64c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32m-131.3 78 19.5 39.6 43.7 6.4c26.2 3.8 36.7 36.1 17.7 54.6L302 305.4l7.5 43.5c4.5 26.1-23 46.1-46.4 33.7L224 362l-39.1 20.6c-23.5 12.4-50.9-7.6-46.4-33.7l7.5-43.5-31.6-30.8c-19-18.5-8.5-50.8 17.7-54.6l43.7-6.4 19.5-39.6c11.7-23.8 45.7-23.8 57.4 0m-52 61.3c-2.3 4.7-6.8 8-12 8.8l-52 7.6 37.7 36.7c3.8 3.7 5.5 9 4.6 14.2l-8.9 51.8 46.5-24.5c4.7-2.4 10.2-2.4 14.9 0l46.5 24.5-8.9-51.8c-.9-5.2.8-10.5 4.6-14.2l37.7-36.7-52-7.6c-5.2-.8-9.7-4-12-8.8l-23.3-47.2-23.3 47.2z"})
);

export default LanCalendarStar;
