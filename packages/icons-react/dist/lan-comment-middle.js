import React from 'react';

export const LanCommentMiddle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m216.6 425.7 39.4 78.7 39.4-78.7c4.2-8.4 12-14.6 21.1-16.8C413.6 385.6 480 309.4 480 224c0-102.2-96.1-192-224-192S32 121.8 32 224c0 85.4 66.4 161.6 163.5 184.9 9.2 2.2 16.9 8.4 21.1 16.8M324 440l-44.8 89.7c-4.4 8.8-13.4 14.3-23.2 14.3s-18.8-5.5-23.2-14.3L188 440C79.6 414 0 327.1 0 224 0 100.3 114.6 0 256 0s256 100.3 256 224c0 103.1-79.6 190-188 216"})
);

export default LanCommentMiddle;
