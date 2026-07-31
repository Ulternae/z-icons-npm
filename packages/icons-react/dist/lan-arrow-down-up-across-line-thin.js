import React from 'react';

export const LanArrowDownUpAcrossLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M389.7 2.3c-3.1-3.1-8.2-3.1-11.3 0l-120 120c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L376 27.3V248H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h112v220.7L13.7 378.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0l120-120c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L136 484.7V264h368c4.4 0 8-3.6 8-8s-3.6-8-8-8H392V27.3l106.3 106.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-120-120zM392 320h-16v184c0 4.4 3.6 8 8 8s8-3.6 8-8zM120 192h16V8c0-4.4-3.6-8-8-8s-8 3.6-8 8z"})
);

export default LanArrowDownUpAcrossLineThin;
