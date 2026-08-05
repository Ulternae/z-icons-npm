import React from 'react';

export function LanWatchAppleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M123-32h138c24.5 0 45 18.4 47.7 42.7l6 54C353.8 70 384 103.5 384 144v224c0 40.5-30.2 74-69.3 79.3l-6 54C306 525.6 285.5 544 261 544H123c-24.5 0-45-18.4-47.7-42.7l-6-54C30.2 442 0 408.5 0 368V144c0-40.5 30.2-74 69.3-79.3l6-54C78-13.6 98.5-32 123-32m181 160H80c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V144c0-8.8-7.2-16-16-16m-112 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64m24 112a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72-136a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M88 256a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanWatchAppleSolid;
