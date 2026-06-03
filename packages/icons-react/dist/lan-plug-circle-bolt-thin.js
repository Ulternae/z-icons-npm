import React from 'react';

export const LanPlugCircleBoltThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 640 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M184-32c4.4 0 8 3.6 8 8V96h192V-24c0-4.4 3.6-8 8-8s8 3.6 8 8V96h104c4.4 0 8 3.6 8 8s-3.6 8-8 8h-24v96.7c-5.4.4-10.7 1.1-16 2V112H112v112c0 97.2 78.8 176 176 176 5.4 0 10.7-.2 16-.7v.7q0 7.65.6 15.3c-2.8.2-5.7.4-8.6.5V504c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88.2C177.7 411.6 96 327.4 96 224V112H72c-4.4 0-8-3.6-8-8s3.6-8 8-8h104V-24c0-4.4 3.6-8 8-8m312 560a128 128 0 1 0 0-256 128 128 0 1 0 0 256m0-272a144 144 0 1 1 0 288 144 144 0 1 1 0-288m29.7 66.3c3.1 3.1 3.1 8.2 0 11.3L467.3 392H544c3.2 0 6.2 1.9 7.4 4.9s.6 6.4-1.7 8.7l-72 72c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l58.3-58.3H448c-3.2 0-6.2-1.9-7.4-4.9s-.6-6.4 1.7-8.7l72-72c3.1-3.1 8.2-3.1 11.3 0z"})
);

export default LanPlugCircleBoltThin;
