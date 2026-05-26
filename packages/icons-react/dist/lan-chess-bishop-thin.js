import React from 'react';

export const LanChessBishopThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M200 0c4.4 0 8 3.6 8 8s-3.6 8-8 8h-26.7l105 126.1c26.9 32.3 41.6 72.9 41.6 114.9 0 40.8-13.9 80.3-39.3 112.2L262.3 392l49.8 62.3c5 6.3 7.8 14.1 7.8 22.2 0 19.6-15.9 35.5-35.5 35.5H35.5C15.9 512 0 496.1 0 476.5c0-8.1 2.7-15.9 7.8-22.2L57.6 392l-18.3-22.8C13.9 337.3 0 297.8 0 257c0-42 14.7-82.7 41.6-114.9L146.7 16H120c-4.4 0-8-3.6-8-8s3.6-8 8-8zM70.1 402l-49.8 62.3c-2.8 3.5-4.3 7.8-4.3 12.2 0 10.8 8.7 19.5 19.5 19.5h248.9c9.4 0 17.3-6.7 19.1-15.6l.4-3.9c0-3.3-.8-6.6-2.4-9.4l-1.8-2.7-49.8-62.3-1.6-2H71.7l-1.6 2zm88.8-375.8-105 126.1c-23 27.6-36.2 61.8-37.8 97.5L16 257c0 37.1 12.6 73.2 35.8 102.2L71.6 384h176.6l1.6-2 18.3-22.8 4.2-5.5c20.5-28 31.6-61.9 31.6-96.7 0-35.9-11.8-70.7-33.5-99.1l-.5-.7-72.4 72.4c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l73.5-73.5-98.8-118.6-1.1-1.3-1.1 1.3z"})
);

export default LanChessBishopThin;
