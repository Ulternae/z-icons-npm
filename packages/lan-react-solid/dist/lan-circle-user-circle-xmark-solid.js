import React from 'react';

export function LanCircleUserCircleXmarkSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 208c-77.5 0-144.3 45.9-174.6 112H256c-47.4 0-88.9 25.8-111 64.2 35.2 39.2 86.2 63.8 143 63.8 7.4 0 14.6-.4 21.7-1.2 5.5 21.9 14.8 42.4 27.1 60.6-15.8 3-32.1 4.6-48.8 4.6-141.4 0-256-114.6-256-256S146.6 0 288 0c126.8 0 232.1 92.2 252.4 213.2-14.3-3.4-29.1-5.2-44.4-5.2m-208 64a72 72 0 1 0 0-144 72 72 0 1 0 0 144m208-16a144 144 0 1 1 0 288 144 144 0 1 1 0-288m59.3 107.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L496 377.4l-36.7-36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l36.7 36.7-36.7 36.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l36.7-36.7 36.7 36.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L518.6 400z"})
  );
}

export default LanCircleUserCircleXmarkSolid;
