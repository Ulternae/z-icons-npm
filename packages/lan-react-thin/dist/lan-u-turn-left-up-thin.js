import React from 'react';

export function LanUTurnLeftUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160.4 0c-8.1 0-16.8 3.6-22.6 9.3l-112 112c-20.8 20.9-4 52.8 22.7 54.7h48v128c0 114.9 93.1 208 208 208s208-93.1 208-208V96c-.8-17.4-13.9-32-32-32h-64c-17.4.8-32 13.9-32 32v208c0 44.2-35.8 80-80 80s-80-35.8-80-80V176h48c12.9 0 24.6-7.8 29.6-19.7 4.9-11.9 2.2-25.7-6.9-34.9L183 9.4C177.3 3.6 168.5 0 160.4 0m0 16c4.1 0 7.5 1.6 11.7 5.1l111.6 111.6c10 10 2.8 27.3-11.3 27.3h-56c-4.4 0-8 3.6-8 8v136c0 53 43 96 96 96s96-43 96-96V96c0-9.4 7.4-15.2 16-16h64c9.4 0 15.2 7.4 16 16v208c0 106-86 192-192 192s-192-86-192-192V168c0-4.2-3.8-8-8-8h-56c-13.3-1-21.7-16.9-11.3-27.3L148.9 21c3.6-2.9 7.1-4.5 11.6-5z"})
  );
}

export default LanUTurnLeftUpThin;
