import React from 'react';

export const LanScreencastThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 48H64c-26.5 0-48 21.5-48 48v80H0V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H304v-16h144c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48M8 224c137 0 248 111 248 248 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-128.1-103.9-232-232-232-4.4 0-8-3.6-8-8s3.6-8 8-8m40 224a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-48 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0m0-120c0-4.4 3.6-8 8-8 83.9 0 152 68.1 152 152 0 4.4-3.6 8-8 8s-8-3.6-8-8c0-75.1-60.9-136-136-136-4.4 0-8-3.6-8-8"})
);

export default LanScreencastThin;
