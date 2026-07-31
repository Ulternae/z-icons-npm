import React from 'react';

export const LanFishingRodRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M280.4 48c-3.2 0-6.3.5-9.3 1.4l-64.5 19.8C136.1 90.9 88 156.1 88 229.8v42.9c22.7 3.8 40 23.6 40 47.3v144c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V320c0-23.8 17.3-43.5 40-47.3v-42.9C40 135 101.8 51.2 192.5 23.4l64.4-19.9c7.6-2.3 15.5-3.5 23.4-3.5 44 0 79.6 35.7 79.6 79.6V136c0 13.3-10.7 24-24 24s-24-10.7-24-24V79.6C312 62.2 297.8 48 280.4 48M48 320v144h32V320zm208 24c0-71.6 55.6-127.8 89-148.1 4.3-2.6 9.6-2.6 14 0 33.5 20.3 89 76.6 89 148.1 0 32-16 80-64 112l27.3 27.3c3 3 4.7 7.1 4.7 11.3v1.4c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-1.4c0-4.2 1.7-8.3 4.7-11.3L320 456c-48-32-64-80-64-112m128-32a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanFishingRodRegular;
