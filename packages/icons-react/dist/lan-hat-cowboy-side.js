import React from 'react';

export const LanHatCowboySide = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M253.8 64c-21.1 0-39.4 14.7-44 35.3l-24.5 110.5c18.2 2.4 35.9 7.2 52.8 14.2h219.8L430.2 99.3c-4.6-20.6-22.9-35.3-44-35.3h-1c-6.4 0-12.6 1.5-18.3 4.3-29.5 14.8-64.3 14.8-93.8 0-5.7-2.8-11.9-4.3-18.3-4.3zM152.9 208.1l25.7-115.8c7.8-35.2 39.1-60.3 75.2-60.3h1c11.3 0 22.5 2.6 32.6 7.7a72.65 72.65 0 0 0 65.2 0c10.1-5.1 21.3-7.7 32.6-7.7h1c36.1 0 67.4 25.1 75.2 60.3l25.9 116.3C572.9 216.4 640 288.4 640 376v4c0 37.6-30.4 68-68 68H68c-37.6 0-68-30.4-68-68v-13.5c0-85.6 67.9-155.4 152.9-158.4m341.8 33.8L533.3 416H572c19.9 0 36-16.1 36-36v-4c0-67.4-49-123.3-113.4-134.1zm.3 148.9L465 256H292.8l202.1 134.7zM158.5 240C88.6 240 32 296.6 32 366.5V380c0 19.9 16.1 36 36 36h407.2L255 269.2c-28.6-19.1-62.2-29.2-96.5-29.2"})
);

export default LanHatCowboySide;
