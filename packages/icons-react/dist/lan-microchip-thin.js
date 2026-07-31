import React from 'react';

export const LanMicrochipThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-16c-35.3 0-64 28.7-64 64v16H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v88H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v88H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h56v16c0 35.3 28.7 64 64 64h16v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h88v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h88v56c0 4.4 3.6 8 8 8s8-3.6 8-8v-56h16c35.3 0 64-28.7 64-64v-16h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-88h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-88h56c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-16c0-35.3-28.7-64-64-64h-16V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-88V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56h-88zm96 72h128c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H128c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zm96 96v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16m-176-32c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h160c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32z"})
);

export default LanMicrochipThin;
