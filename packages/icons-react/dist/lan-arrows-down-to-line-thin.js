import React from 'react';

export const LanArrowsDownToLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8h496c4.4 0 8 3.6 8 8s-3.6 8-8 8zm125.7-98.3c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l74.3 74.3V8c0-4.4 3.6-8 8-8s8 3.6 8 8v380.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-88 88zm256 0c-3.1 3.1-8.2 3.1-11.3 0l-88-88c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l74.3 74.3V8c0-4.4 3.6-8 8-8s8 3.6 8 8v380.7l74.3-74.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-88 88z"})
);

export default LanArrowsDownToLineThin;
