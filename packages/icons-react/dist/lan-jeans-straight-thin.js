import React from 'react';

export const LanJeansStraightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M395.3 16H49.5C31 16 16.4 31.6 17.6 50l.9 14h407.9l.9-14c1.1-18.4-13.5-34-31.9-34zm-90.8 64h-72v416h136.8c16.9 0 30.9-13.1 31.9-30l18.1-290h-26.9c-48.6 0-88-39.4-88-88v-8zm16 0v8c0 39.8 32.2 72 72 72h27.9l5-80zm-104 0h-72v8c0 48.6-39.4 88-88 88h-31l18.1 290c1.1 16.9 15 30 31.9 30h141zm-197 0 5 80h32c39.8 0 72-32.2 72-72v-8zm30-80h345.8c27.7 0 49.6 23.4 47.9 51l-26 416c-1.6 25.3-22.6 45-47.9 45H75.5c-25.3 0-46.3-19.7-47.9-45L1.6 51C-.1 23.4 21.8 0 49.5 0"})
);

export default LanJeansStraightThin;
