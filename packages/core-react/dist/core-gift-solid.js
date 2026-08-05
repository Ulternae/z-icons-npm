import React from 'react';

export function CoreGiftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M154.2 60H152c-19.9 0-36 16.1-36 36 0 13.9 7.9 26 19.5 32H216l-28.9-49.2C180.2 67.2 167.7 60 154.2 60m222.3 68c11.6-6 19.5-18.1 19.5-32 0-19.9-16.1-36-36-36h-2.2c-13.5 0-26 7.2-32.9 18.8L296 128zM512 192h-32v256c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V192H0v-64h65.7C62 118 60 107.3 60 96c0-50.8 41.2-92 92-92h2.2c33.4 0 64.2 17.7 81.2 46.4L256 85.6l20.7-35.2C293.6 21.7 324.5 4 357.8 4h2.2c50.8 0 92 41.2 92 92 0 11.3-2 22-5.7 32H512zm-280 0v256h48V192z"})
  );
}

export default CoreGiftSolid;
