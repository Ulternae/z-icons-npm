import React from 'react';

export const LanMelonSliceThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M427 2.3c-3.1-3.1-8.2-3.1-11.3 0l-84.9 84.9c-1.8 1.8-2.6 4.3-2.3 6.8q2.1 14.55 2.1 29.7c0 114.3-92.6 206.9-206.9 206.9q-15.15 0-29.7-2.1c-2.5-.4-5 .5-6.8 2.3L2.3 415.7c-3.1 3.1-3.1 8.2 0 11.3 54.4 54.4 128.3 85 205.2 85h4.2C377.6 512 512 377.6 512 211.7v-4.2c0-77-30.6-150.8-85-205.2m-42.7 54 36.9-36.9c48 50.8 74.8 118.1 74.8 188.2v4.2C496 368.7 368.7 496 211.7 496h-4.2c-70.1 0-137.4-26.8-188.2-74.7l36.9-36.9c41.6 39.5 97.8 63.7 159.7 63.7 128.1 0 232-103.9 232-232 0-61.9-24.2-118.1-63.7-159.7zM373 67.6c36.6 38.7 59 90.9 59 148.4 0 119.3-96.7 216-216 216-57.4 0-109.7-22.4-148.4-59l28.1-28.1c9.2 1.1 18.5 1.7 28 1.7 123.1 0 222.9-99.8 222.9-222.9 0-9.5-.6-18.8-1.7-28z"})
);

export default LanMelonSliceThin;
