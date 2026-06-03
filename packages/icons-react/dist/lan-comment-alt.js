import React from 'react';

export const LanCommentAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m179.2 533.6-6.4 4.8C168 542 162.1 544 156 544c-15.5 0-28-12.5-28-28v-68H96c-53 0-96-43-96-96V128c0-53 43-96 96-96h320c53 0 96 43 96 96v224c0 53-43 96-96 96H296c-1.7 0-3.4.6-4.8 1.6zM160 468v40l112-84c6.9-5.2 15.3-8 24-8h120c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h40c13.3 0 24 10.7 24 24z"})
);

export default LanCommentAlt;
