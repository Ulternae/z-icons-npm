import React from 'react';

export const LanAlbumCircleUserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 80H96c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h146.7c2.8 16.8 7.8 32.9 14.8 48H96c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v118c-15.3-3.9-31.4-6-48-6V96c0-8.8-7.2-16-16-16m-160 32c64.2 0 118.5 42 137.1 99.9-16 3.3-31.2 8.5-45.4 15.5-12.2-39.1-48.6-67.5-91.7-67.5-53 0-96 43-96 96 0 49.7 37.8 90.6 86.2 95.5-4 15.2-6.1 31.2-6.2 47.6-72-8-128-69-128-143.1 0-79.5 64.5-144 144-144zm-32 144a32 32 0 1 1 64 0 32 32 0 1 1-64 0m64 144a144 144 0 1 1 288 0 144 144 0 1 1-288 0m221.7 80.7c-6.2-19-24-32.7-45.1-32.7h-65.2c-21 0-38.9 13.7-45.1 32.7 20.1 19.4 47.5 31.3 77.7 31.3s57.5-11.9 77.7-31.3M480 368a48 48 0 1 0-96 0 48 48 0 1 0 96 0"})
);

export default LanAlbumCircleUserRegular;
