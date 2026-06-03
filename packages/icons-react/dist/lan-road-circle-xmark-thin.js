import React from 'react';

export const LanRoadCircleXmarkThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M170.6 83.5 81.4 412.9c-.9 3.4-1.4 7-1.4 10.6 0 22.4 18.1 40.5 40.5 40.5h194.4c1.9 5.4 4.1 10.8 6.5 16H120.5C89.3 480 64 454.7 64 423.5c0-5 .7-10 2-14.8l89.2-329.4C162.8 51.4 188.1 32 217 32h206c28.9 0 54.2 19.4 61.8 47.3l35.3 130.2c-5.6-.7-11.2-1.2-16.9-1.4L469.4 83.5C463.7 62.5 444.7 48 423 48h-95v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V48h-95c-21.7 0-40.7 14.5-46.3 35.5zM320 200c4.4 0 8 3.6 8 8v96c0 4.4-3.6 8-8 8s-8-3.6-8-8v-96c0-4.4 3.6-8 8-8m304 200a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m197.7-42.3L507.4 400l42.3 42.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-42.3-42.3-42.3 42.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l42.3-42.3-42.3-42.3c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l42.3 42.3 42.3-42.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3"})
);

export default LanRoadCircleXmarkThin;
