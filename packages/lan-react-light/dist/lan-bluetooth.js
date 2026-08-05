import React from 'react';

export function LanBluetooth({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M153.4 1.4c5.7-2.6 12.5-1.5 17.2 2.6l144 128c3.6 3.2 5.5 7.7 5.4 12.5s-2.4 9.2-6.2 12.1L186.1 256l127.7 99.4c3.8 2.9 6 7.4 6.2 12.1s-1.8 9.3-5.4 12.5l-144 128c-4.7 4.2-11.4 5.2-17.2 2.6s-9.4-8.3-9.4-14.6V288.7L25.8 380.6c-7 5.4-17 4.2-22.5-2.8s-4.2-17 2.8-22.5L133.9 256 6.2 156.6c-7-5.4-8.2-15.5-2.8-22.5s15.5-8.2 22.5-2.8l118.1 92V16c0-6.3 3.7-12 9.4-14.6M176 288.7v171.7l103-91.6zm0-65.4 103-80.1-103-91.6z"})
  );
}

export default LanBluetooth;
