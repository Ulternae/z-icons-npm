import React from 'react';

export const LanBlockQuoteThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 64c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8zm128 184c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8zm-8 192c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-4.4 0-8 3.6-8 8M0 440c0 4.4 3.6 8 8 8s8-3.6 8-8V232c0-4.4-3.6-8-8-8s-8 3.6-8 8z"})
);

export default LanBlockQuoteThin;
