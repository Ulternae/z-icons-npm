import React from 'react';

export const CoreNotdefSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 0c35.3 0 64 28.7 64 64v384c0 33.1-25.2 60.4-57.5 63.7l-6.5.3H64l-6.5-.3C25.2 508.4 0 481.1 0 448V64C0 28.7 28.7 0 64 0zM101.5 448h245L224 305.1zm164.6-192L384 393.5V118.4zM64 393.5 181.9 256 64 118.5zm160-186.7L346.4 64H101.6z"})
);

export default CoreNotdefSolid;
