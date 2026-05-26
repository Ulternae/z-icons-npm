import React from 'react';

export const LanFilePenThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 16h133.5q5.4 0 10.5 1.2V120c0 30.9 25.1 56 56 56h102.8q1.2 5.1 1.2 10.5v97.2l16-16v-81.2c0-17-6.7-33.3-18.7-45.3L306.8 18.7C294.8 6.7 278.5 0 261.5 0H128C92.7 0 64 28.7 64 64v384c0 35.3 28.7 64 64 64h145.9l3.2-16H128c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m296 144h-96c-22.1 0-40-17.9-40-40V24c2.7 1.8 5.1 3.8 7.4 6.1L418 152.6c2.3 2.3 4.3 4.8 6.1 7.4zm-87.6 367.5 11.5-57.5c1.9-9.3 6.4-17.8 13.1-24.5l132.6-132.6 57.4 57.4-132.6 132.6c-6.7 6.7-15.2 11.3-24.5 13.1zm252.3-194.9L562.3 359l-57.4-57.4 26.4-26.4c15.8-15.8 41.5-15.8 57.4 0s15.8 41.5 0 57.4M320.3 526.5c-.2.9-.3 1.9-.3 2.9 0 8 6.5 14.6 14.6 14.6 1 0 1.9-.1 2.9-.3l59.5-12c12.4-2.5 23.8-8.6 32.7-17.5L600 343.9c22.1-22.1 22.1-57.9 0-80s-57.9-22.1-80 0L349.7 434.2c-8.9 8.9-15 20.3-17.5 32.7z"})
);

export default LanFilePenThin;
