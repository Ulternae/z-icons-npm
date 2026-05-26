import React from 'react';

export const LanAngleUpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M186.3 146.3c3.1-3.1 8.2-3.1 11.3 0l176 176c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L192 163.3 21.7 333.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l176-176z"})
);

export default LanAngleUpThin;
