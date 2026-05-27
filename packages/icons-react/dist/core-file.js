import React from 'react';

export const CoreFile = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 128v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-256c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0h192zM64 448h256V154.5L229.5 64H64z"})
);

export default CoreFile;
