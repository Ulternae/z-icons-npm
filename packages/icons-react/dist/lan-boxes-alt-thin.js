import React from 'react';

export const LanBoxesAltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 16c26.5 0 48 21.5 48 48v112h16V64c0-35.3-28.7-64-64-64H176c-35.3 0-64 28.7-64 64v112h16V64c0-26.5 21.5-48 48-48h32v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V16zm-112 0h64v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm91.9 496H448c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64H315.9c3.5 5 6.6 10.4 9.3 16H400v64c0 8.8-7.2 16-16 16h-48v16h48c17.7 0 32-14.3 32-32v-64h32c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H325.2c-2.7 5.6-5.8 11-9.3 16M240 448.1V288zM224 240c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V288c0-26.5 21.5-48 48-48h32v64c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32v-64zm-112 0h64v64c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16zm112-16H64c-35.3 0-64 28.7-64 64v160c0 35.3 28.7 64 64 64h160c35.3 0 64-28.7 64-64V288c0-35.3-28.7-64-64-64"})
);

export default LanBoxesAltThin;
