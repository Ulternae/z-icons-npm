import React from 'react';

export const LanArrowDownWideShortThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m237.7 373.7-104 104c-3.1 3.1-8.2 3.1-11.3 0l-104-104c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l90.3 90.3V40c0-4.4 3.6-8 8-8s8 3.6 8 8v412.7l90.3-90.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM296 464c-4.4 0-8-3.6-8-8s3.6-8 8-8h80c4.4 0 8 3.6 8 8s-3.6 8-8 8zm0-128c-4.4 0-8-3.6-8-8s3.6-8 8-8h144c4.4 0 8 3.6 8 8s-3.6 8-8 8zm0-128c-4.4 0-8-3.6-8-8s3.6-8 8-8h208c4.4 0 8 3.6 8 8s-3.6 8-8 8zm0-128c-4.4 0-8-3.6-8-8s3.6-8 8-8h272c4.4 0 8 3.6 8 8s-3.6 8-8 8z"})
);

export default LanArrowDownWideShortThin;
