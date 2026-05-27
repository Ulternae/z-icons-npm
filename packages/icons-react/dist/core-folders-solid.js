import React from 'react';

export const CoreFoldersSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 64h128c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64h128zM64 128v320h416v64H64c-35.3 0-64-28.7-64-64V128z"})
);

export default CoreFoldersSolid;
