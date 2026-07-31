import React from 'react';

export const LanAngleDoubleDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m373.7 93.7-176 176c-3.1 3.1-8.2 3.1-11.3 0l-176-176c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L192 252.7 362.3 82.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zm0 192-176 176c-3.1 3.1-8.2 3.1-11.3 0l-176-176c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L192 444.7l170.3-170.4c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3z"})
);

export default LanAngleDoubleDownThin;
