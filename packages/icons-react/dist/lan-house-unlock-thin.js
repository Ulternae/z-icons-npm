import React from 'react';

export const LanHouseUnlockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M277.1 7.2c6.1-5.7 15.7-5.7 21.8 0l188.8 176.3c-5.4 2.1-10.6 4.6-15.5 7.4L288 18.9 96 198.1V456c0 22.1 17.9 40 40 40h72V376c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v120c0 5.5.5 10.8 1.3 16H136c-30.9 0-56-25.1-56-56V213.1l-26.5 24.8c-3.2 3-8.3 2.8-11.3-.4s-2.8-8.3.4-11.3zM224 496h128V376c0-22.1-17.9-40-40-40h-48c-22.1 0-40 17.9-40 40zm352-192v-15.9c0-26.5-21.5-48-48-48s-48 21.5-48 48V352h112c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48v-63.9c0-35.3 28.7-64 64-64s64 28.7 64 64V304zm-144 96v96c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-48v.1h-80v-.1c-17.7 0-32 14.3-32 32"})
);

export default LanHouseUnlockThin;
