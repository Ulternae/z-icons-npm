import React from 'react';

export const LanFileLockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M229.5 16H96c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h208c0 5.5.5 10.8 1.3 16H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c9.5 9.5 15.7 21.7 17.9 34.7H296c-30.9 0-56-25.1-56-56V17.2q-5.1-1.2-10.5-1.2m156.4 136.6L263.4 30.1c-2.3-2.3-4.8-4.3-7.4-6.1v96c0 22.1 17.9 40 40 40h96c-1.8-2.7-3.8-5.1-6.1-7.4M512 288.1c0-26.5-21.5-48-48-48s-48 21.5-48 48V352h96zM368 400v96c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32v.1H400v-.1c-17.7 0-32 14.3-32 32m160-111.9V352c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48v-63.9c0-35.3 28.7-64 64-64s64 28.7 64 64"})
);

export default LanFileLockThin;
