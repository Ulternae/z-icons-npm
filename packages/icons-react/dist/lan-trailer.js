import React from 'react';

export const LanTrailer = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 64c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H302.4c-14.6-28.5-44.2-48-78.4-48s-63.8 19.5-78.4 48H96c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM96 416h40.4c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8H624c8.8 0 16-7.2 16-16s-7.2-16-16-16h-88.6c5.4-9.4 8.6-20.3 8.6-32V96c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64m240-288c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16m80 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16s-16 7.2-16 16m-272-16c-8.8 0-16 7.2-16 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16m80 16v128c0 8.8 7.2 16 16 16s16-7.2 16-16V144c0-8.8-7.2-16-16-16s-16 7.2-16 16m0 224a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanTrailer;
