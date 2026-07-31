import React from 'react';

export const LanLightbulbDollar = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M352 192c0 42.7-16.7 81.4-43.9 110.1-19.9 20.9-40.4 48.7-48.5 81.9H124.4c-8.1-33.3-28.6-61-48.5-81.9C48.7 273.4 32 234.7 32 192c0-88.4 71.6-160 160-160s160 71.6 160 160M128 416h128v16c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48zm160-2.3c0-34.3 19.7-64.7 43.3-89.6C364 289.7 384 243.2 384 192 384 86 298 0 192 0S0 86 0 192c0 51.2 20 97.7 52.7 132.1C76.3 349 96 379.4 96 413.7V432c0 44.2 35.8 80 80 80h32c44.2 0 80-35.8 80-80zM176 104c0-8.8 7.2-16 16-16s16 7.2 16 16v8h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-49.7c-7.9 0-14.3 6.4-14.3 14.3 0 7 5.1 13 12 14.1l45.3 7.6c22.3 3.7 38.7 23 38.7 45.7 0 25.6-20.7 46.3-46.3 46.3H208v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h57.7c7.9 0 14.3-6.4 14.3-14.3 0-7-5.1-13-12-14.1l-45.3-7.6c-22.3-3.7-38.7-23-38.7-45.7 0-25.6 20.7-46.3 46.3-46.3h1.7z"})
);

export default LanLightbulbDollar;
