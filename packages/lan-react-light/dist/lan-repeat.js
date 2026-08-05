import React from 'react';

export function LanRepeat({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 150.3V41.6l64 53.3v2l-64 53.3zM352 23.5V80H192C86 80 0 166 0 272c0 8.8 7.2 16 16 16s16-7.2 16-16c0-88.4 71.6-160 160-160h160v56.5c0 13 10.5 23.5 23.5 23.5 5.5 0 10.8-1.9 15-5.4l78-65c7.3-6.1 11.5-15.1 11.5-24.6v-2c0-9.5-4.2-18.5-11.5-24.6l-78-65c-4.2-3.5-9.5-5.4-15-5.4-13 0-23.5 10.5-23.5 23.5M128 415.9v54.5l-64-53.3v-2l64-53.3v54.3zm32-15.9v-56.5c0-13-10.5-23.5-23.5-23.5-5.5 0-10.8 1.9-15 5.4l-78 65C36.2 396.5 32 405.5 32 415v2c0 9.5 4.2 18.5 11.5 24.6l78 65c4.2 3.5 9.5 5.4 15 5.4 13 0 23.5-10.5 23.5-23.5V432h160c106 0 192-86 192-192 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 88.4-71.6 160-160 160z"})
  );
}

export default LanRepeat;
