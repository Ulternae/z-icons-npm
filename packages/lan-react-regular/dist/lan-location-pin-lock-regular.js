import React from 'react';

export function LanLocationPinLockRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 188.6C48 111.7 111.7 48 192 48s144 63.7 144 140.6c0 1.5 0 3.1-.1 4.6 14.4-8.3 30.5-13.9 47.7-16.1C377.5 78.3 294 .1 192 .1 86 .1 0 84.5 0 188.7 0 308 120.2 451 170.4 505.5c11.8 12.8 31.5 12.8 43.3 0 7.5-8.1 16.4-18.1 26.4-29.8v-76.6c-17.2 22.8-34 42.9-48 58.7-24.1-27.3-56.7-67.2-85.1-112.1-35.1-55.5-58.9-111.5-58.9-157.1zm112 3.4a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m160 112.1V352h-64v-47.9c0-17.7 14.3-32 32-32s32 14.3 32 32M288 400v96c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48v-96c0-20.9-13.4-38.7-32-45.3v-50.6c0-44.2-35.8-80-80-80s-80 35.8-80 80v50.6c-18.6 6.6-32 24.4-32 45.3"})
  );
}

export default LanLocationPinLockRegular;
