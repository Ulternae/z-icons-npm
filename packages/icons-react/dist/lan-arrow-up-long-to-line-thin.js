import React from 'react';

export const LanArrowUpLongToLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8-64h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8M186.3 66.3c3.1-3.1 8.2-3.1 11.3 0l152 152c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L200 91.3V568c0 4.4-3.6 8-8 8s-8-3.6-8-8V91.3L45.7 229.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l152-152z"})
);

export default LanArrowUpLongToLineThin;
