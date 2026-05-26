import React from 'react';

export const LanAlbumCirclePlusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 80H96c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h146.7c2.8 16.8 7.8 32.9 14.8 48H96c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v118c-15.3-3.9-31.4-6-48-6V96c0-8.8-7.2-16-16-16m-160 32c64.2 0 118.5 42 137.1 99.9-16 3.3-31.2 8.5-45.4 15.5-12.2-39.1-48.6-67.5-91.7-67.5-53 0-96 43-96 96 0 49.7 37.8 90.6 86.2 95.5-4 15.2-6.1 31.2-6.2 47.6-72-8-128-69-128-143.1 0-79.5 64.5-144 144-144zm-32 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0m208 0a144 144 0 1 1 0 288 144 144 0 1 1 0-288m16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48z"})
);

export default LanAlbumCirclePlusRegular;
