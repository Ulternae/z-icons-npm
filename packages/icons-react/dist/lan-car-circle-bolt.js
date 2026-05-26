import React from 'react';

export const LanCarCircleBolt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M140.9 107.8c8.8-26.2 33.2-43.8 60.8-43.8h172.7c27.5 0 52 17.6 60.7 43.8l23.9 71.8c10.6-2.1 21.4-3.3 32.6-3.5l-26.2-78.5A95.95 95.95 0 0 0 374.3 32H201.7c-41.3 0-78 26.4-91.1 65.6l-32.3 96.9C51.6 202.2 32 226.8 32 256v208c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h246c-2.7-10.4-4.5-21-5.4-32H64V256c0-17.7 14.3-32 32-32h273c14.9-13.1 31.7-24 50.1-32H112.8zM136 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48m360-72a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m10-219.3-64 64c-4.6 4.6-5.9 11.5-3.5 17.4s8.3 9.9 14.8 9.9H500l-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c4.6-4.6 5.9-11.5 3.5-17.4s-8.3-9.9-14.8-9.9h-46.7l36.7-36.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"})
);

export default LanCarCircleBolt;
