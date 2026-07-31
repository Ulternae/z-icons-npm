import React from 'react';

export const LanEngineWarningThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M416 40c0 4.4-3.6 8-8 8h-80v80h128c30.9 0 56 25.1 56 56v24.7c-5.3-.4-10.6-.7-16-.7v-24c0-22.1-17.9-40-40-40H184c-22.1 0-40 17.9-40 40v144c0 22.1 17.9 40 40 40h40c2.5 0 4.9 1.2 6.4 3.2L264 416c7.6 10.1 19.4 16 32 16h10.7c.9 5.4 2 10.7 3.4 16h-14c-17.6 0-34.2-8.3-44.8-22.4L220 384h-36c-30.9 0-56-25.1-56-56v-64H80v88c0 4.4-3.6 8-8 8s-8-3.6-8-8V160c0-4.4 3.6-8 8-8s8 3.6 8 8v88h48v-64c0-30.9 25.1-56 56-56h128V48h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8h176c4.4 0 8 3.6 8 8m144 178.9V168c0-4.4 3.6-8 8-8s8 3.6 8 8v57.4c-5.2-2.4-10.6-4.6-16-6.5M408 224H232c-4.4 0-8-3.6-8-8s3.6-8 8-8h176c4.4 0 8 3.6 8 8s-3.6 8-8 8m216 176a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m144 52a12 12 0 1 1 0 24 12 12 0 1 1 0-24m0-140c4.4 0 8 3.6 8 8v96c0 4.4-3.6 8-8 8s-8-3.6-8-8v-96c0-4.4 3.6-8 8-8"})
);

export default LanEngineWarningThin;
