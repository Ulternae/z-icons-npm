import React from 'react';

export const LanIndustryAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 88c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v126.7c0 8.6 4.6 16.5 12 20.8s16.6 4.2 24-.1l139.9-81.6v70.9c0 8.8 4.8 16.8 12.5 21.1s17.1 3.9 24.5-.8L464 156v260.1c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16zm8-56C25.1 32 0 57.1 0 88v328c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V155.9c0-37.9-41.9-60.9-73.9-40.4L336 180.9v-27c0-37-40.2-60.1-72.2-41.5L160 172.9V88c0-30.9-25.1-56-56-56zm184 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM96 336v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m272-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z"})
);

export default LanIndustryAltRegular;
