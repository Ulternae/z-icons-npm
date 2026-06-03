import React from 'react';

export const LanWatchApple = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M123 0c-8.2 0-15 6.1-15.9 14.2L101.6 64h180.9L277 14.2C276 6.1 269.2 0 261 0zm185.7 10.7 6 54C353.8 70 384 103.5 384 144v224c0 40.5-30.2 74-69.3 79.3l-6 54C306 525.6 285.5 544 261 544H123c-24.5 0-45-18.4-47.7-42.7l-6-54C30.2 442 0 408.5 0 368V144c0-40.5 30.2-74 69.3-79.3l6-54C78-13.6 98.5-32 123-32h138c24.5 0 45 18.4 47.7 42.7M286 96H80c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48zM101.5 448l5.5 49.8c.9 8.1 7.7 14.2 15.9 14.2H261c8.2 0 15-6.1 15.9-14.2l5.5-49.8zM192 232a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24 104a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48m72-136a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-72-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48M88 256a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
);

export default LanWatchApple;
