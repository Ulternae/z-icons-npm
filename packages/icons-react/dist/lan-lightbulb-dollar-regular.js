import React from 'react';

export const LanLightbulbDollarRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M296.5 291.1C321 265.2 336 230.4 336 192c0-79.5-64.5-144-144-144S48 112.5 48 192c0 38.4 15 73.2 39.5 99.1 21.3 22.4 44.9 54 53.3 92.9h102.4c8.4-39 32-70.5 53.3-92.9m34.8 33C307.7 349 288 379.4 288 413.7V432c0 44.2-35.8 80-80 80h-32c-44.2 0-80-35.8-80-80v-18.3c0-34.3-19.7-64.7-43.3-89.6C20 289.7 0 243.2 0 192 0 86 86 0 192 0s192 86 192 192c0 51.2-20 97.7-52.7 132.1M196 88c11 0 20 9 20 20v4h8c11 0 20 9 20 20s-9 20-20 20h-43.4c-4.7 0-8.6 3.8-8.6 8.6 0 4.1 2.9 7.6 6.9 8.4l34.1 6.8c22.7 4.5 39 24.5 39 47.6 0 22.5-15.3 41.4-36 46.9v5.6c0 11-9 20-20 20s-20-9-20-20v-4h-16c-11 0-20-9-20-20s9-20 20-20h43.4c4.7 0 8.6-3.8 8.6-8.6 0-4.1-2.9-7.6-6.9-8.4l-34.1-6.7c-22.7-4.5-39-24.5-39-47.6 0-25.3 19.3-46.1 44-48.4V108c0-11 9-20 20-20"})
);

export default LanLightbulbDollarRegular;
