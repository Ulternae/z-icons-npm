import React from 'react';

export const LanBinary = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M320 16v176h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H240c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V36.5l-44.1 11c-8.6 2.1-17.3-3.1-19.4-11.6s3.1-17.3 11.6-19.4l64-16c4.8-1.2 9.8-.1 13.7 2.9S320 11.1 320 16M96 304v176h48c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h48V324.5l-44.1 11c-8.6 2.1-17.3-3.1-19.4-11.6s3.1-17.3 11.6-19.4l64-16c4.8-1.2 9.8-.1 13.7 2.9S96 299.1 96 304M0 64C0 28.7 28.7 0 64 0h64c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm64-32c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zm192 256h64c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64v-96c0-35.3 28.7-64 64-64m-32 64v96c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32"})
);

export default LanBinary;
