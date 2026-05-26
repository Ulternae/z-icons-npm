import React from 'react';

export const LanHeartCircleMinus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M378.9 64c-32.4 0-62.9 15.6-81.9 41.9l-28 38.7c-3 4.2-7.8 6.6-13 6.6s-10-2.5-13-6.6l-28-38.7C196 79.6 165.5 64 133.1 64 77.2 64 32 109.3 32 165.1c0 55 34.4 107.1 71.8 152.5 42.1 51.2 93.4 96 128.5 122.9 3.8 2.9 8.4 5.1 13.4 6.3 2.9 11.5 6.8 22.6 11.7 33.2H256c-15.6 0-30.8-4.6-43.1-14.1C176.4 438 123.2 391.5 79.1 338 41.6 292.5 0 232.5 0 165.2 0 91.7 59.6 32.1 133.1 32.1c42.7 0 82.8 20.5 107.9 55.1l15 20.7 15-20.7c25-34.6 65.2-55.1 107.9-55.1 73.5 0 133.1 59.6 133.1 133.1 0 19.4-3.5 38.3-9.3 56.3-9.8-3.9-20.1-7-30.6-9.2 5-15.4 7.9-31.1 7.9-47.1 0-55.9-45.3-101.1-101.1-101.1zM432 512a112 112 0 1 0 0-224 112 112 0 1 0 0 224m0-256a144 144 0 1 1 0 288 144 144 0 1 1 0-288m80 144c0 8.8-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16h128c8.8 0 16 7.2 16 16"})
);

export default LanHeartCircleMinus;
