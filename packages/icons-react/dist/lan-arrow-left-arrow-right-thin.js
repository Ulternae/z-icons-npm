import React from 'react';

export const LanArrowLeftArrowRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M2.3 122.3c-3.1 3.1-3.1 8.2 0 11.3l120 120c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L27.3 136H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H27.3L133.7 13.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-120 120zm507.3 256-120-120c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 376H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h476.7L378.4 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l120-120c3.1-3.1 3.1-8.2 0-11.3z"})
);

export default LanArrowLeftArrowRightThin;
