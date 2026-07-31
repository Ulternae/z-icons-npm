import React from 'react';

export const LanHeartCirclePlusThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M378.9 48C341.3 48 306 66 284 96.5l-21.5 29.7c-1.5 2.1-3.9 3.3-6.5 3.3s-5-1.2-6.5-3.3L228 96.5C206 66 170.7 48 133.1 48 68.4 48 16 100.4 16 165.1c0 60.1 36.9 115.8 75.4 162.7 43.1 52.4 95.4 98 131.2 125.4 8 6.1 17.8 9.7 28.2 10.6q2.85 8.25 6.6 16.2H256c-15.5 0-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 40.4 291 0 231.4 0 165.2 0 91.7 59.6 32.1 133.1 32.1c42.7 0 82.8 20.5 107.9 55.1l15 20.7 15-20.7c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 19.4-3.5 38.2-9.3 56.3-4.9-2-10-3.7-15.1-5.3 5.3-16.6 8.4-33.6 8.4-51 0-64.7-52.4-117.1-117.1-117.1zM560 400a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m152-64v56h56c4.4 0 8 3.6 8 8s-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8s3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanHeartCirclePlusThin;
