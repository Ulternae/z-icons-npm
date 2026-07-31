import React from 'react';

export const LanHeadSide = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 216c0-101.6 82.4-184 184-184 93.6 0 170.9 69.9 182.5 160.4.5 3.5 2.1 6.8 4.6 9.3l52.4 52.4c5.5 5.5 8.6 12.9 8.6 20.7 0 16.2-13.1 29.3-29.3 29.3L416 304c-8.8 0-16 7.2-16 16v48c0 26.5-21.5 48-48 48h-48c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h32c44.2 0 80-35.8 80-80v-32h2.7c33.8 0 61.3-27.4 61.3-61.3 0-16.2-6.5-31.8-17.9-43.3l-48.6-48.6C413.5 79.3 324 0 216 0 96.7 0 0 96.7 0 216c0 60 24.5 114.3 64 153.5V496c0 8.8 7.2 16 16 16s16-7.2 16-16V362.6c0-4.5-1.9-8.7-5.1-11.7C54.7 317.3 32 269.3 32 216m288 0a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanHeadSide;
