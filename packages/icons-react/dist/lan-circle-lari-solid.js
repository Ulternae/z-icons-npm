import React from 'react';

export const LanCircleLariSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-400v8.1c1.3 0 2.7-.1 4-.1 4 0 8.1.2 12 .6V112c0-8.8 7.2-16 16-16s16 7.2 16 16v16c39.3 14.9 69 49.2 77.5 91.2 2.6 13-5.8 25.7-18.7 28.3s-25.7-5.8-28.3-18.7c-3.9-19.2-15.1-35.8-30.5-46.8v26c0 8.8-7.2 16-16 16s-16-7.2-16-16v-39.1q-5.85-.9-12-.9c-1.3 0-2.7 0-4 .1V208c0 8.8-7.2 16-16 16s-16-7.2-16-16v-30.9c-23.8 12.8-40 38-40 66.9 0 42 34 76 76 76h84c13.3 0 24 10.7 24 24s-10.7 24-24 24H168c-13.3 0-24-10.7-24-24 0-11.4 7.9-20.9 18.5-23.4-16.6-21.1-26.5-47.7-26.5-76.6 0-56 37.1-103.3 88-118.7V112c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanCircleLariSolid;
