import React from 'react';

export const LanSeatsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 16c-26.5 0-48 21.5-48 48v192h200V64c0-26.5-21.5-48-48-48zm368 240V64c0-26.5-21.5-48-48-48H312c-26.5 0-48 21.5-48 48v192zm16 0v2.7c18.6 6.6 32 24.4 32 45.3v48c0 20.9-13.4 38.7-32 45.3V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V400H264v104c0 4.4-3.6 8-8 8s-8-3.6-8-8V400H48v104c0 4.4-3.6 8-8 8s-8-3.6-8-8V397.3C13.4 390.7 0 372.9 0 352v-48c0-20.9 13.4-38.7 32-45.3V64C32 28.7 60.7 0 96 0h104c24.1 0 45.1 13.3 56 33 10.9-19.7 31.9-33 56-33h104c35.3 0 64 28.7 64 64zM16 304v48c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32v-48c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32"})
);

export default LanSeatsThin;
