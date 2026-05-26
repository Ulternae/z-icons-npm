import React from 'react';

export const LanNotesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 416c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64h288c35.3 0 64 28.7 64 64v181.5c0 17-6.7 33.3-18.7 45.3L386.7 397.3c-12 12-28.3 18.7-45.3 18.7zm293.5-176H360c-13.3 0-24 10.7-24 24v93.5zM192 292a28 28 0 1 0 0 56 28 28 0 1 0 0-56m28-196a28 28 0 1 0-56 0 28 28 0 1 0 56 0m-28 84a28 28 0 1 0 0 56 28 28 0 1 0 0-56M48 120v328c0 8.8 7.2 16 16 16h264c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-35.3 0-64-28.7-64-64V120c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanNotesSolid;
