import React from 'react';

export const LanCircleUserCircleExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M306.7 368c2.8-16.8 7.8-32.9 14.8-48h-65.4c-53.5 0-99.4 32.9-118.5 79.6C102 362.3 80.1 311.7 80.1 256c0-114.9 93.1-208 208-208 98.4 0 180.8 68.3 202.5 160.1 1.8-.1 3.7-.1 5.5-.1 15.3 0 30.2 1.8 44.4 5.2C520.1 92.2 414.9 0 288.1 0c-141.4 0-256 114.6-256 256S146.6 512 288 512c16.7 0 33-1.6 48.8-4.6-9.3-13.8-16.9-28.9-22.4-45-8.6 1.1-17.4 1.7-26.3 1.7-40.6 0-78.4-11.6-110.5-31.7 7.3-36.7 39.7-64.3 78.5-64.3h50.7zM288 240a40 40 0 1 1 0-80 40 40 0 1 1 0 80m-88-40a88 88 0 1 0 176 0 88 88 0 1 0-176 0m296 344a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-100a20 20 0 1 1 0 40 20 20 0 1 1 0-40m0-140c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16"})
);

export default LanCircleUserCircleExclamationRegular;
