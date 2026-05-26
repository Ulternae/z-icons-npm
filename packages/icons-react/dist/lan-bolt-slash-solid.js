import React from 'react';

export const LanBoltSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L416.4 350.7l84-70c10.3-8.6 14.2-22.8 9.6-35.5S493.5 224 480 224H335.3l78.4-196.1c5.4-13.6 1-29.2-10.9-37.8s-28-8.1-39.3 1.3l-167 139.2zm193.3 329-72 180c-5.4 13.6-.9 29.2 10.9 37.8s28 8.1 39.3-1.3l130-108.3zM122.5 192.3l-47 39.1c-10.3 8.6-14.2 22.8-9.6 35.5S82.5 288 96 288h122.2z"})
);

export default LanBoltSlashSolid;
