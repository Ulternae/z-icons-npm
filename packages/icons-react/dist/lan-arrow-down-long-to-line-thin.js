import React from 'react';

export const LanArrowDownLongToLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -64 384 640',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 576h368c4.4 0 8-3.6 8-8s-3.6-8-8-8H8c-4.4 0-8 3.6-8 8s3.6 8 8 8m178.3-130.3c3.1 3.1 8.2 3.1 11.3 0l152-152c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L200 420.7V-56c0-4.4-3.6-8-8-8s-8 3.6-8 8v476.7L45.7 282.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l152 152z"})
);

export default LanArrowDownLongToLineThin;
