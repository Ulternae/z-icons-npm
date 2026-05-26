import React from 'react';

export const LanRectangleTallSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64-64h256c35.3 0 64 28.7 64 64v512c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V0c0-35.3 28.7-64 64-64"})
);

export default LanRectangleTallSolid;
