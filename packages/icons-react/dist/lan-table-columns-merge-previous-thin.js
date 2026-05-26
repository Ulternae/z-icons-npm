import React from 'react';

export const LanTableColumnsMergePreviousThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 33.1 25.2 60.4 57.5 63.7l6.5.3h320l6.5-.3c30.1-3.1 54.1-27 57.1-57.1l.3-6.5v-320c0-35.3-28.7-64-64-64zm320 16c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48H232v-80h-16v80H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h152v80h16V48zM213.7 178.3c-3.1-3.1-8.2-3.1-11.3 0l-72 72-1 1.2c-2.1 3.1-1.7 7.3 1 10.1l72 72c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L155.3 264H312c4.4 0 8-3.6 8-8s-3.6-8-8-8H155.3l58.3-58.3c3.1-3.1 3.1-8.2 0-11.3z"})
);

export default LanTableColumnsMergePreviousThin;
