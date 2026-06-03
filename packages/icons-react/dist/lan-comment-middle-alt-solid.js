import React from 'react';

export const LanCommentMiddleAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m176 448 67.2 89.6c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4L336 448h80c53 0 96-43 96-96V128c0-53-43-96-96-96H96C43 32 0 75 0 128v224c0 53 43 96 96 96z"})
);

export default LanCommentMiddleAltSolid;
