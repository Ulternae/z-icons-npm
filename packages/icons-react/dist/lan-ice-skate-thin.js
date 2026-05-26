import React from 'react';

export const LanIceSkateThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M312 0c4.4 0 8 3.6 8 8v218.3l101.1 35.4 6.5 2.6c31.7 14 52.4 45.4 52.4 80.5v39.3c0 17.7-14.3 32-32 32h-32v80h104c22.1 0 40-17.9 40-40v-24c0-4.4 3.6-8 8-8s8 3.6 8 8v24c0 30.9-25.1 56-56 56L8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8h120v-80H96c-17.7 0-32-14.3-32-32V72l.1-1.5c.6-3.3 3.3-6 6.8-6.5L304 33V8c0-4.4 3.6-8 8-8M144 496h256v-80H144zM80 79v305c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16v-39.3c0-28.7-17-54.4-42.9-65.8l-5.3-2.1L310.6 240H224c-4.4 0-8-3.6-8-8s3.6-8 8-8h80v-64h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h80V49.1z"})
);

export default LanIceSkateThin;
