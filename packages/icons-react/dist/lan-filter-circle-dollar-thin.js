import React from 'react';

export const LanFilterCircleDollarThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '-0.008 0 576.008 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 80c-6.5 0-12.3 3.9-14.8 9.9s-1.1 12.9 3.5 17.4l185 185c1.5 1.5 2.3 3.5 2.3 5.7v118c0 4.2 1.7 8.3 4.7 11.3l39.1 39.1c5.5 15 12.9 29.2 21.8 42.2-3-1.5-5.8-3.5-8.3-6l-64-64c-6-6-9.4-14.1-9.4-22.6l.1-114.7L9.4 118.6c-9.2-9.1-11.9-22.9-7-34.8S19.1 64 32 64h448c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L412.3 209c-9.4 1-18.6 2.6-27.5 4.8l106.5-106.5c4.6-4.6 5.9-11.5 3.5-17.4S486.5 80 480 80zm400 448a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m-8 64c0-4.4 3.6-8 8-8s8 3.6 8 8v16h24c4.4 0 8 3.6 8 8s-3.6 8-8 8h-45.8c-10 0-18.2 8.1-18.2 18.2 0 8.8 6.3 16.3 14.9 17.9l45 8.2c16.2 3 28.1 17.1 28.1 33.6 0 18.9-15.3 34.2-34.2 34.2H440v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16h-24c-4.4 0-8-3.6-8-8s3.6-8 8-8h53.8c10 0 18.2-8.1 18.2-18.2 0-8.8-6.3-16.3-14.9-17.9l-45-8.2c-16.2-3-28.1-17.1-28.1-33.6 0-18.9 15.3-34.2 34.2-34.2h5.8z"})
);

export default LanFilterCircleDollarThin;
