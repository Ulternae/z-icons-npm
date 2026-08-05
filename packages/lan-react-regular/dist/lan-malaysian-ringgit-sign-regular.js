import React from 'react';

export function LanMalaysianRinggitSignRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 424c0 13.3 10.7 24 24 24s24-10.7 24-24V168.7l75.9 116.4c4.4 6.8 12 10.9 20.1 10.9s15.7-4.1 20.1-10.9L528 168.7V424c0 13.3 10.7 24 24 24s24-10.7 24-24V88c0-10.6-7-20-17.2-23s-21.1 1-26.9 9.9L432 228.1 332.1 74.9C326.3 66 315.3 62 305.2 65S288 77.4 288 88zM0 88v336c0 13.3 10.7 24 24 24s24-10.7 24-24V304h84.2l45.2 128c4.4 12.5 18.1 19.1 30.6 14.6s19-18.1 14.6-30.6l-42.5-120.4C224.6 278 256 234.7 256 184c0-66.3-53.7-120-120-120H24C10.7 64 0 74.7 0 88m48 168V112h88c39.8 0 72 32.2 72 72s-32.2 72-72 72z"})
  );
}

export default LanMalaysianRinggitSignRegular;
