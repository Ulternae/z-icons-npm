import React from 'react';

export const LanNewspaper = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 64c-17.7 0-32 14.3-32 32v320c0 11.7-3.1 22.6-8.6 32H432c26.5 0 48-21.5 48-48V96c0-17.7-14.3-32-32-32zM64 448c17.7 0 32-14.3 32-32V96c0-35.3 28.7-64 64-64h288c35.3 0 64 28.7 64 64v304c0 44.2-35.8 80-80 80H64c-35.3 0-64-28.7-64-64V112c0-8.8 7.2-16 16-16s16 7.2 16 16v304c0 17.7 14.3 32 32 32m288-272c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16m0 64c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16m-176 64c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16m0 64c0-8.8 7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16H192c-8.8 0-16-7.2-16-16m48-144h64v-64h-64zm-32-72c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24z"})
);

export default LanNewspaper;
