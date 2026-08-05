import React from 'react';

export function LanParkingCircleSlash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M425.3 402.7 332 309.4c30.9-16 52-48.2 52-85.4 0-53-43-96-96-96h-88c-13.3 0-24 10.7-24 24v1.4l-66.7-66.7C148.6 52.6 199.9 32 256 32c123.7 0 224 100.3 224 224 0 56.1-20.6 107.4-54.7 146.7m-22.6 22.6C363.4 459.4 312.1 480 256 480 132.3 480 32 379.7 32 256c0-56.1 20.6-107.4 54.7-146.7l89.3 89.3V368c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h80c3 0 6-.1 9-.4zM307.6 285 208 185.4V160h80c35.3 0 64 28.7 64 64 0 28.5-18.7 52.7-44.4 61M208 230.6l57.4 57.4H208zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512"})
  );
}

export default LanParkingCircleSlash;
