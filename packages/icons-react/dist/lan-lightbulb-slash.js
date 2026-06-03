import React from 'react';

export const LanLightbulbSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.85 576 575.9',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L405.5 351c6.4-9.5 13.9-18.5 21.8-26.8C460 289.8 480 243.3 480 192.1c0-106-86-192-192-192C224.4.1 168 31 133.1 78.7zM156 101.5c28.8-42 77.2-69.5 132-69.5 88.4 0 160 71.6 160 160 0 42.7-16.7 81.4-43.9 110.1-7.3 7.7-14.7 16.4-21.6 25.9L211 156.5c8.2-25.8 32.4-44.5 61-44.5 8.8 0 16-7.2 16-16s-7.2-16-16-16c-37.2 0-69.4 21.2-85.4 52.1zM96 192c0 51.2 20 97.7 52.7 132.1 23.6 24.9 43.3 55.3 43.3 89.6V432c0 44.2 35.8 80 80 80h32c40.8 0 74.5-30.6 79.4-70.1L325.5 384H220.4c-8.1-33.3-28.6-61-48.5-81.9C144.7 273.4 128 234.7 128 192c0-1.8 0-3.6.1-5.4l-29-29c-2 11.2-3.1 22.7-3.1 34.4m128 240v-16h128v16c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48"})
);

export default LanLightbulbSlash;
