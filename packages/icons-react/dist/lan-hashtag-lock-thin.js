import React from 'react';

export const LanHashtagLockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -0.003 640 544.003',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M235.9.2c4.3.9 7.1 5.2 6.1 9.5L216.7 128h197.4L440.2 6.3c.9-4.3 5.2-7.1 9.5-6.1s7.1 5.2 6.1 9.5L430.5 128H536c4.4 0 8 3.6 8 8s-3.6 8-8 8H427.1c-12.6 58.7-28.6 133.3-48 224l-3.4 16-26.1 121.7c-.9 4.3-5.2 7.1-9.5 6.1s-7.1-5.2-6.1-9.5L359.4 384H162l-26.1 121.7c-.9 4.3-5.2 7.1-9.5 6.1s-7.1-5.2-6.1-9.5L145.5 384H40c-4.4 0-8-3.6-8-8s3.6-8 8-8h109l48-224H91.5c-4.4 0-8-3.6-8-8s3.6-8 8-8h109L226.6 6.3c.9-4.3 5.2-7.1 9.5-6.1zM213.3 144l-48 224h197.4l48-224zM576 288.1c0-26.5-21.5-48-48-48s-48 21.5-48 48V352h96zM432 400v96c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32v.1H464v-.1c-17.7 0-32 14.3-32 32m160-111.9V352c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48v-63.9c0-35.3 28.7-64 64-64s64 28.7 64 64"})
);

export default LanHashtagLockThin;
