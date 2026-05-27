import React from 'react';

export const CoreUnlockSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 64c-35.3 0-64 28.7-64 64v64c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64h192v-64C256 57.3 313.3 0 384 0s128 57.3 128 128v128h-64V128c0-35.3-28.7-64-64-64"})
);

export default CoreUnlockSolid;
