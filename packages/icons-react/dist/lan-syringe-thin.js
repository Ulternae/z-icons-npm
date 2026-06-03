import React from 'react';

export const LanSyringeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -8.025 576 520.025',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M485.7-5.7c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L500.7 32 432 100.7l-74.3-74.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l10.3 10.3-249 249c-7.5 7.5-11.7 17.7-11.7 28.3v111.4l-61.7 61.7c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l61.7-61.7h111.4c10.6 0 20.8-4.2 28.3-11.7l249-249 10.3 10.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L443.3 112 512 43.3l26.3 26.4c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-64-64zm-1 181.7-249 249c-4.5 4.5-10.6 7-17 7H112V325.3c0-6.4 2.5-12.5 7-17l57-57 42.3 42.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L187.3 240l84.7-84.7 42.3 42.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L283.3 144 368 59.3z"})
);

export default LanSyringeThin;
