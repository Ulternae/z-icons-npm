import React from 'react';

export function LanUTurnLeftDownThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160.4 512c-8.1 0-16.8-3.6-22.6-9.3l-112-112c-20.8-20.9-4-52.8 22.7-54.7h48V208c0-114.9 93.1-208 208-208s208 93.1 208 208v208c-.8 17.4-13.9 32-32 32h-64c-17.4-.8-32-13.9-32-32V208c0-44.2-35.8-80-80-80s-80 35.8-80 80v128h48c12.9 0 24.6 7.8 29.6 19.7 4.9 11.9 2.2 25.7-6.9 34.9l-112 112c-5.8 5.8-14.6 9.4-22.6 9.3zm0-16c4.1 0 7.5-1.6 11.7-5.1l111.6-111.6c10-10 2.8-27.3-11.3-27.3h-56c-4.4 0-8-3.6-8-8V208c0-53 43-96 96-96s96 43 96 96v208c0 9.4 7.4 15.2 16 16h64c9.4 0 15.2-7.4 16-16V208c0-106-86-192-192-192s-192 86-192 192v136c0 4.2-3.8 8-8 8h-56c-13.3 1-21.7 16.9-11.3 27.3L148.9 491c3.6 2.9 7.1 4.5 11.6 5z"})
  );
}

export default LanUTurnLeftDownThin;
