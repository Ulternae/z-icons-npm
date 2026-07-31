import React from 'react';

export const LanTrianglePersonDiggingThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M275.7 29.4c-3.9-7.2-11.5-11.8-19.7-11.8s-15.8 4.5-19.7 11.8l-216 400c-3.7 6.9-3.6 15.3.5 22.1s11.3 10.9 19.2 10.9h432c7.9 0 15.2-4.2 19.2-10.9s4.2-15.2.5-22.1zM256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480H40c-14.1 0-27.1-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21m-48 272c-4.4 0-8 3.6-8 8v3.3l74.5 41.9-11.2-36.3c-3.1-10.1-12.4-16.9-22.9-16.9zm86.7 64.6 22 12.4 17.2-31.4c6.1-11.1 22-11.1 28.1 0l41 74.7c5.8 10.7-1.9 23.7-14 23.7h-82c-12.2 0-19.9-13-14-23.7l16.1-29.3-121-68c-2.5-1.4-4.1-4.1-4.1-7v-8c0-13.3 10.7-24 24-24h32.4c17.6 0 33.1 11.5 38.2 28.2zM272 192a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-50.1 128.3c2.2-.6 4.6-.2 6.5 1.1l48 32c2.2 1.5 3.6 4 3.6 6.7v48c0 4.4-3.6 8-8 8s-8-3.6-8-8v-43.7l-36.8-24.6-35 71.8c-1.9 4-6.7 5.6-10.7 3.7s-5.6-6.7-3.7-10.7l39-80c1-2.1 2.9-3.6 5.1-4.2zM307 400h82l-41-74.7z"})
);

export default LanTrianglePersonDiggingThin;
