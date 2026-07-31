import React from 'react';

export const LanSquareDownLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64zm216-128c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-35-35 67-67c9.4-9.4 9.4-24.6 0-33.9l-24-24c-9.4-9.4-24.6-9.4-33.9 0l-67 67-35-35c-6.9-6.9-17.2-8.9-26.2-5.2S128 190.3 128 200v128c0 13.3 10.7 24 24 24z"})
);

export default LanSquareDownLeftSolid;
