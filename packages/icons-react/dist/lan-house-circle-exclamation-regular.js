import React from 'react';

export const LanHouseCircleExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -0.05 640 544.05',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 6.1c9.1-8.2 22.9-8.2 32 0l229.2 205.5c-12-2.4-24.5-3.6-37.2-3.6-12 0-23.8 1.1-35.1 3.2L288 56.2 128 199.7V448c0 8.8 7.2 16 16 16h48V360c0-39.8 32.2-72 72-72h48c8.8 0 17.2 1.6 24.9 4.4-9.1 13.5-16.6 28.1-22.1 43.7-.9-.1-1.9-.2-2.9-.2h-48c-13.3 0-24 10.7-24 24v104h74.9c6.1 17.3 14.6 33.4 25.1 48h-196c-35.3 0-64-28.7-64-64V242.6l-8 7.2c-9.9 8.8-25 8-33.9-1.8s-8-25 1.8-33.9zM496 256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 228a20 20 0 1 0 0-40 20 20 0 1 0 0 40m0-180c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16"})
);

export default LanHouseCircleExclamationRegular;
