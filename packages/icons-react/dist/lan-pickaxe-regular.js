import React from 'react';

export const LanPickaxeRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M528 224c0 20.4-2.9 40.2-8.4 58.8-54.8-112.3-146-203.6-258.4-258.4 18.6-5.5 38.3-8.4 58.8-8.4 114.9 0 208 93.1 208 208m17.1 122 .4-.7C565 309.2 576 267.9 576 224c0-62-22.1-118.9-58.8-163.3L537 41c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-34-.1l-19.7 19.8C438.9-9.9 382-32 320-32c-43.9 0-85.2 11-121.3 30.5l-.7.4c-2.7 1.5-5.3 3-7.9 4.5q-9.3 5.4-18 11.7c-10.4 7.3-6.8 22.9 5.2 26.9 6.2 2.1 12.4 4.2 18.5 6.5 2.5.9 5.1 1.9 7.6 2.9l.4.2c58.3 23 111.4 56.4 157 97.9L39 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l321.7-321.6c41.5 45.6 74.9 98.6 97.9 157l.2.4c1 2.5 2 5 2.9 7.6 2.3 6.1 4.5 12.3 6.5 18.5 4 12.1 19.5 15.6 26.9 5.2q6.15-8.7 11.7-18c1.5-2.6 3-5.3 4.5-7.9z"})
);

export default LanPickaxeRegular;
