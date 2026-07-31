import React from 'react';

export const LanLightbulbThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M319.7 313.1c30-31.6 48.3-74.2 48.3-121.1 0-97.2-78.8-176-176-176S16 94.8 16 192c0 46.9 18.3 89.5 48.3 121.1C86 336 106.7 365.5 111.1 400h161.8c4.5-34.5 25.1-64 46.8-86.9M112 432c0 35.3 28.7 64 64 64h32c35.3 0 64-28.7 64-64v-16H112zm219.3-107.9C307.7 349 288 379.4 288 413.7V432c0 44.2-35.8 80-80 80h-32c-44.2 0-80-35.8-80-80v-18.3c0-34.3-19.7-64.7-43.3-89.6C20 289.7 0 243.2 0 192 0 86 86 0 192 0s192 86 192 192c0 51.2-20 97.7-52.7 132.1M96 184c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-57.4 46.6-104 104-104 4.4 0 8 3.6 8 8s-3.6 8-8 8c-48.6 0-88 39.4-88 88"})
);

export default LanLightbulbThin;
