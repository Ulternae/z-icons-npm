import React from 'react';

export const LanAngleLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M18.3 261.7c-3.1-3.1-3.1-8.2 0-11.3l176-176c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L35.3 256l170.4 170.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-176-176z"})
);

export default LanAngleLeftThin;
