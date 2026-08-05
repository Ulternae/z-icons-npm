import React from 'react';

export function LanBitcoinSign({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 16c0-8.8 7.2-16 16-16s16 7.2 16 16v48h64V16c0-8.8 7.2-16 16-16s16 7.2 16 16v48.3c53.7 4.1 96 49 96 103.7 0 31.3-13.9 59.4-35.8 78.5 39.6 14.7 67.8 52.8 67.8 97.5 0 57.4-46.6 104-104 104h-24v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H96v48c0 8.8-7.2 16-16 16s-16-7.2-16-16v-48H29.1C13 448 0 435 0 418.9V90.2C0 75.7 11.7 64 26.2 64H64zm112 400h40c39.8 0 72-32.2 72-72s-32.2-72-72-72H32v144zm0-320H32v144h152c39.8 0 72-32.2 72-72s-32.2-72-72-72z"})
  );
}

export default LanBitcoinSign;
