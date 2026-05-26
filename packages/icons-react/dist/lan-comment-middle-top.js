import React from 'react';

export const LanCommentMiddleTop = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M216.6 86.3 256 7.6l39.4 78.7c4.2 8.4 12 14.6 21.1 16.8C413.6 126.4 480 202.6 480 288c0 102.2-96.1 192-224 192S32 390.2 32 288c0-85.4 66.4-161.6 163.5-184.9 9.2-2.2 16.9-8.4 21.1-16.8M324 72l-44.8-89.7C274.8-26.5 265.8-32 256-32s-18.8 5.5-23.2 14.3L188 72C79.6 98 0 184.9 0 288c0 123.7 114.6 224 256 224s256-100.3 256-224c0-103.1-79.6-190-188-216"})
);

export default LanCommentMiddleTop;
