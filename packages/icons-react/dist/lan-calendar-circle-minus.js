import React from 'react';

export const LanCalendarCircleMinus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H96c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h161.4c-4.7-10.2-8.5-20.9-11.4-32H96c-17.7 0-32-14.3-32-32V192h416v-64c0-35.3-28.7-64-64-64h-32V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H160zM96 96h320c17.7 0 32 14.3 32 32v32H64v-32c0-17.7 14.3-32 32-32m336 192a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m80-144c0-8.8-7.2-16-16-16H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16"})
);

export default LanCalendarCircleMinus;
