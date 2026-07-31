import React from 'react';

export const LanBinaryCircleCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 8c0-2.5-1.2-4.9-3.2-6.4s-4.7-2-7.1-1.2l-80 24c-4.2 1.3-6.6 5.7-5.4 10s5.7 6.6 10 5.4L368 18.9v189.2h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h59.1c23.5-10.3 49.5-16 76.8-16L384 208zm56 200h-7.9q4.95 0 9.9.3c-.6-.2-1.3-.3-2-.3m-280 88c0-2.5-1.2-4.9-3.2-6.4s-4.7-2-7.1-1.2l-80 24c-4.2 1.3-6.6 5.7-5.4 10s5.7 6.6 10 5.4l69.7-20.9v189.2H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8h-56v-200zM128 0C92.7 0 64 28.7 64 64v96c0 35.3 28.7 64 64 64h48c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM80 64c0-26.5 21.5-48 48-48h48c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-48c-26.5 0-48-21.5-48-48zm352 208a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m60.7-212.5c-3.6-2.6-8.6-1.8-11.2 1.8l-74 101.7-33.4-40.1c-2.8-3.4-7.9-3.9-11.3-1s-3.9 7.9-1 11.3l40 48c1.6 1.9 3.9 3 6.4 2.9s4.8-1.3 6.2-3.3l80-110c2.6-3.6 1.8-8.6-1.8-11.2z"})
);

export default LanBinaryCircleCheckThin;
