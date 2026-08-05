import React from 'react';

export function LanScorpioThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M56 32c30.4 0 56.4 18.9 66.9 45.6C137.9 50.4 166.8 32 200 32c35.6 0 66.1 21.1 80 51.5C293.9 53.1 324.4 32 360 32c48.6 0 88 39.4 88 88v348.9c0 15 12.1 27.1 27.1 27.1 7.3 0 14.2-2.9 19.3-8.1L612.9 368H552c-4.4 0-8-3.6-8-8s3.6-8 8-8h80c4.4 0 8 3.6 8 8v80c0 4.4-3.6 8-8 8s-8-3.6-8-8v-60.5L505.8 499.2c-8.1 8.2-19.2 12.8-30.7 12.8-22 0-40.1-16.4-42.8-37.7-.2-.7-.4-1.5-.4-2.3V120c0-39.8-32.2-72-72-72s-72 32.2-72 72v352c0 4.4-3.6 8-8 8s-8-3.6-8-8V120c0-39.8-32.2-72-72-72s-72 32.2-72 72v352c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-30.9-25.1-56-56-56H40c-4.4 0-8-3.6-8-8s3.6-8 8-8z"})
  );
}

export default LanScorpioThin;
