import React from 'react';

export const LanTruckTowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M181.4 96.6 228.3 256h81.5zM148.3-21 368 251.7V144c0-26.5 21.5-48 48-48h95.6c19.8 0 37.6 12.2 44.7 30.6l47.9 123.1c2.5 6.5 3.8 13.4 3.8 20.3v114c0 35.3-28.7 64-64 64h-3.3c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H268.7c-10.4 36.9-44.4 64-84.7 64s-74.2-27.1-84.7-64H96c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h82.3l-34.9-118.8c-4.5 31-31.1 54.8-63.3 54.8-35.3 0-64-28.7-64-64v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c0 8.8 7.2 16 16 16s16-7.2 16-16L96-2.6C96-18.8 109.2-32 125.4-32c8.9 0 17.3 4 22.9 11M544 400c8.8 0 16-7.2 16-16v-80H96c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h3.3c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64h102.6c10.4-36.9 44.4-64 84.7-64s74.2 27.1 84.7 64zm11.1-144-43.6-112h-95.6v112H555zM224 424a40 40 0 1 0-80 0 40 40 0 1 0 80 0m232 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default LanTruckTowRegular;
