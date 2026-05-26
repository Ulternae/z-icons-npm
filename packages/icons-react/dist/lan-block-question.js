import React from 'react';

export const LanBlockQuestion = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm88 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m248 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M88 368a24 24 0 1 1 0 48 24 24 0 1 1 0-48m248 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0M136.7 177.8c6.5-24.6 28.7-41.8 54.2-41.8H248c35.5 0 64 29 64 64.3 0 24-13.4 46.2-34.9 57.2L240 276.3V296c0 8.8-7.2 16-16 16s-16-7.2-16-16v-29.5c0-6 3.4-11.5 8.7-14.3l45.8-23.4c10.7-5.4 17.5-16.6 17.5-28.7 0-17.8-14.4-32.3-32-32.3h-57.1c-10.9 0-20.5 7.4-23.2 17.9l-.2.7c-2.2 8.5-11 13.7-19.5 11.4s-13.7-11-11.4-19.5l.2-.7zM200 360a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
);

export default LanBlockQuestion;
