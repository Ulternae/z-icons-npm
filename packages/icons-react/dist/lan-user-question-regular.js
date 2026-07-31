import React from 'react';

export const LanUserQuestionRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256m-48 352c-70.7 0-128 57.3-128 128v8c0 13.3-10.7 24-24 24S0 501.3 0 488v-8c0-97.2 78.8-176 176-176h96c97.2 0 176 78.8 176 176v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-70.7-57.3-128-128-128zm320-232c-16.1 0-29.2 13.1-29.2 29.2 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-42.6 34.6-77.2 77.2-77.2s77.2 34.6 77.2 77.2c0 45.5-34.5 64.7-53.7 71.8-2.3 10.8-11.9 19-23.5 19-13.3 0-24-10.7-24-24 0-20.2 14.6-34.6 29.5-39.5 6-2 12.3-5.1 16.8-9.5 3.9-3.8 6.9-9 6.9-17.7 0-16.1-13.1-29.2-29.2-29.2zm-28 168a28 28 0 1 1 56 0 28 28 0 1 1-56 0"})
);

export default LanUserQuestionRegular;
