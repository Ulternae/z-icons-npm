import React from 'react';

export const LanAngleDoubleUpRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M209.5 47c-9.4-9.4-24.6-9.4-33.9 0L15.5 207c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l143-143 143 143c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9zm160 352-160-160c-9.4-9.4-24.6-9.4-33.9 0L15.5 399c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l143-143 143 143c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
);

export default LanAngleDoubleUpRegular;
