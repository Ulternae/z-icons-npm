import React from 'react';

export const LanHeartCircleExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M378.9 80c-27.3 0-53 13.1-69 35.2l-34.4 47.6c-4.5 6.2-11.7 9.9-19.4 9.9s-14.9-3.7-19.4-9.9l-34.4-47.6c-16-22.1-41.7-35.2-69-35.2-47 0-85.1 38.1-85.1 85.1 0 49.9 32 98.4 68.1 142.3 41.1 49.9 91.4 93.9 125.8 120.3 2.7 18.4 7.9 35.9 15.4 52.2h-1.4c-15.6 0-30.8-4.7-43.1-14.1-36.5-27.9-89.7-74.4-133.8-127.9C43 294 .1 233.7.1 165.1.1 91.6 59.7 32 133.2 32c42.7 0 82.8 20.5 107.9 55.1l15 20.7 15-20.7C296.1 52.5 336.3 32 379 32c73.5 0 133.1 59.6 133.1 133.1 0 19.5-3.5 38.3-9.3 56.3-14.7-5.8-30.3-9.9-46.6-11.9 5-14.6 7.9-29.4 7.9-44.4 0-47-38.1-85.1-85.1-85.1zM432 256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 228a20 20 0 1 0 0-40 20 20 0 1 0 0 40m0-180c-8.8 0-16 7.2-16 16v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80c0-8.8-7.2-16-16-16"})
);

export default LanHeartCircleExclamationRegular;
