import React from 'react';

export const LanArrowUpLongThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.025 320 576.025',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M165.7-29.7c-3.1-3.1-8.2-3.1-11.3 0l-152 152c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L152-4.7V536c0 4.4 3.6 8 8 8s8-3.6 8-8V-4.7l138.3 138.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-152-152z"})
);

export default LanArrowUpLongThin;
