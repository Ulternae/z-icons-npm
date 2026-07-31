import React from 'react';

export const LanSendBackwardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 16h100.7l96 96h22.6l-96-96H288c26.5 0 48 21.5 48 48v48h16V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64v224c0 35.3 28.7 64 64 64h48v-16H64c-26.5 0-48-21.5-48-48V187.3l96 96v-22.6l-96-96V64c0-10.4 3.3-20 8.9-27.8l1.5 1.5 113 113c3.5-4 7.3-7.8 11.3-11.3l-113-113-1.5-1.5C44 19.3 53.6 16 64 16m112 208c0-26.5 21.5-48 48-48h224c26.5 0 48 21.5 48 48v224c0 26.5-21.5 48-48 48H224c-26.5 0-48-21.5-48-48zm-16 0v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V224c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64"})
);

export default LanSendBackwardThin;
