import React from 'react';

export const LanTruckFastRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 80h288c8.8 0 16 7.2 16 16v260.1c-13.6 11.2-23.8 26.5-28.7 43.9H300.7c-10.4-36.9-44.4-64-84.7-64s-74.2 27.1-84.7 64H128c-8.8 0-16-7.2-16-16v-80h24c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v80c0 35.3 28.7 64 64 64h3.3c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h102.6c10.4 36.9 44.4 64 84.7 64s74.2-27.1 84.7-64h3.3c35.3 0 64-28.7 64-64V232.6c0-17-6.7-33.3-18.7-45.3l-40.6-40.6c-12-12-28.3-18.7-45.3-18.7H480V96c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v16h48V96c0-8.8 7.2-16 16-16m352 176v-80h55.4c4.2 0 8.3 1.7 11.3 4.7l40.6 40.6c3 3 4.7 7.1 4.7 11.3V256zm0 48h112v80c0 8.8-7.2 16-16 16h-3.3c-10.4-36.9-44.4-64-84.7-64-2.7 0-5.4.1-8 .4zM64 160H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24zm152 224a40 40 0 1 1 0 80 40 40 0 1 1 0-80m272 0a40 40 0 1 1 0 80 40 40 0 1 1 0-80"})
);

export default LanTruckFastRegular;
