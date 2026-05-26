import React from 'react';

export const LanArrowRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M509.7 261.7c3.1-3.1 3.1-8.2 0-11.3l-176-176c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L484.7 248H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h476.7L322.4 426.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l176-176z"})
);

export default LanArrowRightThin;
