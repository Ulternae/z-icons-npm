import React from 'react';

export const LanHouseMedicalCircleCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M298.9 4.3c-6.1-5.7-15.7-5.7-21.8 0l-240 224c-6.5 6-6.8 16.2-.8 22.6s16.2 6.8 22.6.8L80 232v216c0 35.3 28.7 64 64 64h196c-7.2-10-13.4-20.7-18.6-32H144c-17.7 0-32-14.3-32-32V202.2L288 37.9l183.9 171.6c7.9-1 16-1.5 24.1-1.5 7.6 0 15.2.4 22.6 1.3zm76.7 246.1C369.8 244 361.4 240 352 240h-16v-16c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v16h-16c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h16v16c0 17.7 14.3 32 32 32h32.7c.9-11 2.7-21.6 5.4-32h-38v-40c0-4.4-3.6-8-8-8h-40v-32h40c4.4 0 8-3.6 8-8v-40h32v40c0 4.4 3.6 8 8 8H353c7-7.8 14.6-15 22.7-21.6zM496 288a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 256a144 144 0 1 0 0-288 144 144 0 1 0 0 288m57.4-204.9c-7.1-5.2-17.2-3.6-22.4 3.5l-53 72.9-26.8-26.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.6s8.9-2.8 11.7-6.5l64-88c5.2-7.1 3.6-17.2-3.5-22.4z"})
);

export default LanHouseMedicalCircleCheck;
