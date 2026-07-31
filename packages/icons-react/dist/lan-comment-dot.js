import React from 'react';

export const LanCommentDot = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M544 240c0-13.6-1.2-26.9-3.5-39.9-9.9 3.7-20.4 6.1-31.2 7.3 1.8 10.7 2.8 21.6 2.8 32.7 0 113-98.3 208-224 208-32.3 0-62.8-6.3-90.4-17.6-7.9-3.3-16.9-3.2-24.8.2L71.9 474l40.2-73.6c6.2-11.4 4.9-25.4-3.2-35.4-28.2-34.9-44.8-78.1-44.8-124.8 0-113 98.3-208 224-208 30 0 58.4 5.4 84.3 15.2 2.8-10.5 6.8-20.4 12-29.6C354.7 6.5 322.2.3 288.2.3c-141.4 0-256 107.5-256 240 0 54.4 19.3 104.6 51.9 144.9l-49 89.1c-2 3.7-3.1 7.9-3.1 12.2 0 14.1 11.4 25.5 25.5 25.5 4 0 7.8-.6 11.5-2.1L185.4 460c31.4 12.9 66.1 20 102.6 20 141.4 0 256-107.5 256-240M448 80a48 48 0 1 1 96 0 48 48 0 1 1-96 0m128 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
);

export default LanCommentDot;
