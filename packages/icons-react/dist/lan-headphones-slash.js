import React from 'react';

export const LanHeadphonesSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-77.1-77.1C505.4 424 512 404.8 512 384V224C512 100.3 411.7 0 288 0c-64.3 0-122.2 27.1-163.1 70.4zM147.6 93.1c35-37.6 85-61.1 140.4-61.1 106 0 192 86 192 192v56.4c-17-15.2-39.4-24.4-64-24.4h-16c-24.4 0-44.6 18.2-47.6 41.9zM384 329.5V304c0-8.8 7.2-16 16-16h16c35.3 0 64 28.7 64 64v32c0 11.9-3.2 23-8.9 32.6zM80.6 139.1C69.9 165.3 64 194 64 224v160c0 53 43 96 96 96h16c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48h-16c-24.6 0-47 9.2-64 24.4V224c0-20.9 3.4-41.1 9.5-59.9zM96 368v-16c0-35.3 28.7-64 64-64h16c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16h-16c-35.3 0-64-28.7-64-64z"})
);

export default LanHeadphonesSlash;
