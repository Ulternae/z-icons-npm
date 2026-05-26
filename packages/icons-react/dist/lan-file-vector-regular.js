import React from 'react';

export const LanFileVectorRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48h112v88c0 39.8 32.2 72 72 72h88v240c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m160 19.9 92.1 92.1H248c-13.3 0-24-10.7-24-24zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm169 256h-82c-3.6-13.8-16.1-24-31-24-17.7 0-32 14.3-32 32 0 14.9 10.2 27.4 24 31v82c-13.8 3.6-24 16.1-24 31 0 17.7 14.3 32 32 32 14.9 0 27.4-10.2 31-24h82c3.6 13.8 16.1 24 31 24 17.7 0 32-14.3 32-32 0-14.9-10.2-27.4-24-31v-82c13.8-3.6 24-16.1 24-31 0-17.7-14.3-32-32-32-14.9 0-27.4 10.2-31 24m-81 120v-80h80v80z"})
);

export default LanFileVectorRegular;
