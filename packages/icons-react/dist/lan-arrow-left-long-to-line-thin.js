import React from 'react';

export const LanArrowLeftLongToLineThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 72v368c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-4.4-3.6-8-8-8s-8 3.6-8 8m130.3 178.3c-3.1 3.1-3.1 8.2 0 11.3l152 152c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L155.3 264H632c4.4 0 8-3.6 8-8s-3.6-8-8-8H155.3l138.3-138.3c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-152 152z"})
);

export default LanArrowLeftLongToLineThin;
