import React from 'react';

export function LanBringForwardThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 496h224c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48h-48v-16h48c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-48h16v48c0 26.5 21.5 48 48 48m103.1-180.2c5.6-7.8 8.9-17.4 8.9-27.8V187.3L164.7 16H64c-10.4 0-20 3.3-27.8 8.9l1.5 1.5 288 288 1.5 1.5zm-11.3 11.3-1.5-1.5-288-288-1.5-1.5C19.3 44 16 53.6 16 64v100.7L187.3 336H288c10.4 0 20-3.3 27.8-8.9M164.7 336 16 187.3V288c0 26.5 21.5 48 48 48zM0 168V64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zM187.3 16 336 164.7V64c0-26.5-21.5-48-48-48z"})
  );
}

export default LanBringForwardThin;
