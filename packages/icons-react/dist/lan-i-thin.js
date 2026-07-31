import React from 'react';

export const LanIThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h144v416H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H168V48h144c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanIThin;
