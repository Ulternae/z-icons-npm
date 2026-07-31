import React from 'react';

export const LanTableColumnsMergePrevious = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 33.1 25.2 60.4 57.5 63.7l6.5.3h320l6.5-.3c30.1-3.1 54.1-27 57.1-57.1l.3-6.5v-320c0-35.3-28.7-64-64-64zm320 32c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H240v-64h-32v64H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h144v64h32V64zM227.3 172.7c-6.2-6.2-16.4-6.2-22.6 0l-72 72-2.1 2.5c-4.1 6.2-3.4 14.7 2.1 20.1l72 72c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L182.6 272H304c8.8 0 16-7.2 16-16s-7.2-16-16-16H182.6l44.7-44.7c6.2-6.2 6.2-16.4 0-22.6"})
);

export default LanTableColumnsMergePrevious;
