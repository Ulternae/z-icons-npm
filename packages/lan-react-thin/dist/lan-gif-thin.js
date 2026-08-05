import React from 'react';

export function LanGifThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 88v80c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40v-24h-40c-4.4 0-8-3.6-8-8s3.6-8 8-8h48c4.4 0 8 3.6 8 8v32c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-22.1-17.9-40-40-40h-16c-22.1 0-40 17.9-40 40m176-56c4.4 0 8 3.6 8 8v176c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8m72 0h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-72v80h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8"})
  );
}

export default LanGifThin;
