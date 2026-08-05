import React from 'react';

export function LanTruckRampCouch({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 32c-35.3 0-64 28.7-64 64v292.1L11.4 480.7C2.9 483.2-1.9 492.1.7 500.6s11.5 13.3 19.9 10.7L338.4 416h62c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88-39.4-88-88-88c-34.2 0-63.8 19.5-78.4 48H352V96c0-17.7 14.3-32 32-32h192V32zm48 392a56 56 0 1 1 112 0 56 56 0 1 1-112 0M70.9 176.4c-33.8 10.3-52.8 46.1-42.5 79.9l32.7 107.1 4.7 15.3c5.2 16.9 23.1 26.4 40 21.2L272 349.1v-33.5L96.5 369.3c-1.2-3.8-8.2-26.8-21.1-68.9-3.9-12.7 3.3-26.1 15.9-30s26.1 3.3 30 15.9l2.3 7.7c2.6 8.5 11.5 13.2 20 10.6L272 265.4v-33.5l-122.9 37.6c-11.6-24.8-40.1-37.9-67-29.7-8.2 2.5-15.4 6.7-21.4 12.2l-1.6-5.2c-5.2-16.9 4.3-34.8 21.2-40L272 148.2v-33.5L70.9 176.2z"})
  );
}

export default LanTruckRampCouch;
