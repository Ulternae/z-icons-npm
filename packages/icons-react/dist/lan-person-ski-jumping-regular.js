import React from 'react';

export const LanPersonSkiJumpingRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 512.1 559.996',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 40a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-240 96c0-13.3 10.7-24 24-24h185.9c50.1 0 75 60.8 39.3 95.9L202.6 364.1l-8.8 41.1 240-124.1c18.6-9.6 30.3-28.8 30.3-49.7v-7.3c0-13.3 10.7-24 24-24s24 10.7 24 24v7.3c0 38.9-21.7 74.5-56.2 92.4L35 541.3c-11.7 6.1-26.2 1.5-32.3-10.3S1.2 504.8 13 498.7l125.5-64.9L180.2 239c3.8-17.9 13.1-34.1 26.6-46.4l35.5-32.6H136c-13.3 0-24-10.7-24-24m201.3 24-74.1 67.9c-6.1 5.6-10.3 13-12.1 21.1l-6.4 29.7 106.7-105c5.1-5 1.5-13.7-5.6-13.7z"})
);

export default LanPersonSkiJumpingRegular;
