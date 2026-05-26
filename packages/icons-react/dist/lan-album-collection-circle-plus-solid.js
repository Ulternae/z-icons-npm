import React from 'react';

export const LanAlbumCollectionCirclePlusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 24c0 13.3 10.7 24 24 24h208c13.3 0 24-10.7 24-24S373.3 0 360 0H152c-13.3 0-24 10.7-24 24M64 192c-13.9 0-27.1 6-36.3 16.6S14.5 233 16.5 246.8l32 224C51.9 494.4 72.1 512 96 512h180c-10.5-14.6-19-30.8-25.1-48.1C164.9 462 96 412.6 96 352c0-61.9 71.6-112 160-112 20.8 0 40.7 2.8 58.9 7.8 32.4-25 73-39.8 117.1-39.8 20.3 0 39.8 3.1 58.1 8.9-1.6-3-3.6-5.8-5.8-8.4-9.1-10.5-22.3-16.6-36.3-16.6zm177.2 186c2.2-19 7.1-37.1 14.4-54-21.9.1-39.6 12.6-39.6 28 0 11.8 10.5 21.9 25.2 26M104 96c-13.3 0-24 10.7-24 24s10.7 24 24 24h304c13.3 0 24-10.7 24-24s-10.7-24-24-24zm328 448a144 144 0 1 0 0-288 144 144 0 1 0 0 288m16-208v48h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48h-48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48v-48c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanAlbumCollectionCirclePlusSolid;
