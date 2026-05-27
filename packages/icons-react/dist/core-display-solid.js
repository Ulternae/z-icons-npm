import React from 'react';

export const CoreDisplaySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 0c35.3 0 64 28.7 64 64v256l-.3 6.5c-3.3 32.3-30.6 57.5-63.7 57.5H288v64h96v64H128v-64h96v-64H64C30.9 384 3.6 358.8.3 326.5L0 320V64C0 28.7 28.7 0 64 0z"})
);

export default CoreDisplaySolid;
