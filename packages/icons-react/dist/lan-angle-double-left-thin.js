import React from 'react';

export const LanAngleDoubleLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M18.3 250.3c-3.1 3.1-3.1 8.2 0 11.3l176 176c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L35.3 256 205.7 85.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0l-176 176zm368-176-176 176c-3.1 3.1-3.1 8.2 0 11.3l176 176c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L227.3 256 397.7 85.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0z"})
);

export default LanAngleDoubleLeftThin;
