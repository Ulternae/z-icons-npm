import React from 'react';

export const LanTruckUtensilsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64h3.3c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h102.6c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h3.3c35.3 0 64-28.7 64-64V237.3c0-17-6.7-33.3-18.7-45.3L512 146.7c-12-12-28.3-18.7-45.3-18.7H416V96c0-35.3-28.7-64-64-64zm448 205.3V288h-96v-96h50.7zM152 384a40 40 0 1 1 0 80 40 40 0 1 1 0-80m232 40a40 40 0 1 1 80 0 40 40 0 1 1-80 0M208 192c0 23.8-17.3 43.5-40 47.3V312c0 13.3-10.7 24-24 24s-24-10.7-24-24v-72.7c-22.7-3.8-40-23.6-40-47.3v-80c0-8.8 7.2-16 16-16s16 7.2 16 16v64h16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16v64h16v-64c0-8.8 7.2-16 16-16s16 7.2 16 16zm64 64c-17.7 0-32-14.3-32-32v-68c0-33.1 26.9-60 60-60 11 0 20 9 20 20v196c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})
);

export default LanTruckUtensilsSolid;
