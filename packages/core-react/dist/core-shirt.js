import React from 'react';

export function CoreShirt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M280.4 64h80c0 22.1-17.9 40-40 40s-40-17.9-40-40m136 2.1q2.4.6 4.8 1.5L566 117.9l-10.1 101.3c-52.7-8.1-88.6-13.6-107.5-16.5V448h-256V202.7c-18.9 2.9-54.8 8.4-107.5 16.5L74.7 117.9l144.9-50.3c1.6-.6 3.2-1 4.8-1.5 1.1 52.1 43.7 93.9 96 93.9s94.9-41.9 96-93.9M240.6 0c-14.3 0-28.6 2.4-42.1 7.1L29.8 65.8 6 74.1l2.5 25.1c12.8 127.7 19.2 192.3 19.4 193.6 16.6-2.6 50.1-7.7 100.5-15.5V448c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V277.3c50.4 7.8 83.9 12.9 100.5 15.5.1-1.3 6.6-65.9 19.4-193.6l2.5-25.1-23.8-8.3L442.3 7.1C428.7 2.4 414.5 0 400.1 0z"})
  );
}

export default CoreShirt;
