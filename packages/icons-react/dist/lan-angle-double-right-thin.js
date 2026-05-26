import React from 'react';

export const LanAngleDoubleRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m61.7 437.7 176-176c3.1-3.1 3.1-8.2 0-11.3l-176-176c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L220.7 256 50.3 426.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zm192 0 176-176c3.1-3.1 3.1-8.2 0-11.3l-176-176c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L412.7 256 242.3 426.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z"})
);

export default LanAngleDoubleRightThin;
