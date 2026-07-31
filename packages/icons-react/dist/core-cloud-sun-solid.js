import React from 'react';

export const CoreCloudSunSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -64 640 608',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 0h96v96l64 64-64 64v96h-15.9c-11.1-26.6-27.6-50.4-48.1-70.1v-52.4l37.5-37.5-37.5-37.5V64h-58.5L416 26.5 378.5 64H320v41.3c-20.3-6-41.8-9.3-64-9.3V0h96l64-64zm-35.7 198.7c-17.3-26.9-40.2-49.8-67.1-67.1 8.7-11.9 22.8-19.6 38.7-19.6 26.5 0 48 21.5 48 48 0 15.9-7.7 30-19.7 38.7zm-337 62C130.9 201.7 188.6 160 256 160s125.1 41.7 148.6 100.7C466.4 276.9 512 333.1 512 400c0 79.5-64.5 144-144 144H144C64.5 544 0 479.5 0 400c0-66.9 45.6-123.1 107.4-139.3z"})
);

export default CoreCloudSunSolid;
