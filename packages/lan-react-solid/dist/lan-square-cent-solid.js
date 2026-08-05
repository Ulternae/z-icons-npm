import React from 'react';

export function LanSquareCentSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm184 88v10.2c24.5 4.6 46.5 16.3 63.9 32.7 9.6 9.1 10.1 24.3 1 33.9s-24.3 10.1-33.9 1c-14.3-13.5-33.6-21.8-54.9-21.8-44.2 0-80 35.8-80 80s35.8 80 80 80c21.3 0 40.6-8.3 54.9-21.8 9.6-9.1 24.8-8.7 33.9 1s8.7 24.8-1 33.9c-17.4 16.4-39.4 28-63.9 32.7V392c0 13.3-10.7 24-24 24s-24-10.7-24-24v-10.2C140.8 370.5 96 318.5 96 256s44.8-114.5 104-125.8V120c0-13.3 10.7-24 24-24s24 10.7 24 24"})
  );
}

export default LanSquareCentSolid;
