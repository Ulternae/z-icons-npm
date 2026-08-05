import React from 'react';

export function LanPen({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M375.5 43.8C383.1 36.2 393.3 32 404 32s20.9 4.2 28.5 11.8l35.7 35.7c7.6 7.6 11.8 17.8 11.8 28.5s-4.2 20.9-11.8 28.5L409.7 195 317 102.3zM294.3 125l92.7 92.7-212.8 212.7a56.33 56.33 0 0 1-24.6 14.4L35.5 476.5l31.7-114.1c2.6-9.3 7.5-17.8 14.4-24.6zM404 0c-19.2 0-37.6 7.6-51.1 21.2l-294 294c-10.7 10.7-18.5 24.1-22.6 38.7L.9 481.6c-2.3 8.3 0 17.3 6.2 23.4s15.1 8.5 23.4 6.2l127.8-35.5c14.6-4.1 27.9-11.8 38.7-22.6l294-294c13.4-13.5 21-31.9 21-51.1s-7.6-37.6-21.2-51.1l-35.7-35.7C441.6 7.6 423.2 0 404 0"})
  );
}

export default LanPen;
