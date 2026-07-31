import React from 'react';

export const LanGiftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M321.5 68.8c7.6-12.9 21.4-20.8 36.3-20.8h2.2c22.1 0 40 17.9 40 40s-17.9 40-40 40h-73.3zm-131 0 34.8 59.2H152c-22.1 0-40-17.9-40-40s17.9-40 40-40h2.2c14.9 0 28.8 7.9 36.3 20.8m89.6-24.3-24.1 41-24.1-41C215.7 16.9 186.1 0 154.2 0H152c-48.6 0-88 39.4-88 88 0 14.4 3.5 28 9.6 40H32c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32v192c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V224c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32h-41.6c6.1-12 9.6-25.6 9.6-40 0-48.6-39.4-88-88-88h-2.2c-31.9 0-61.5 16.9-77.7 44.4zM80 224h152v208H96c-8.8 0-16-7.2-16-16zm200 0h152v192c0 8.8-7.2 16-16 16H280z"})
);

export default LanGiftRegular;
