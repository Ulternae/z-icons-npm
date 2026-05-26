import React from 'react';

export const LanCommentMiddleTopSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m188 72 44.8-89.7C237.2-26.5 246.2-32 256-32s18.8 5.5 23.2 14.3L324 72c108.4 26 188 112.9 188 216 0 123.7-114.6 224-256 224S0 411.7 0 288C0 184.9 79.6 98 188 72"})
);

export default LanCommentMiddleTopSolid;
