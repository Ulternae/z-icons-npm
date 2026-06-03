import React from 'react';

export const LanTransporter7Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M536 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v32h-32c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v32c0 4.4 3.6 8 8 8s8-3.6 8-8V88h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32zM56 264c0-4.4-3.6-8-8-8s-8 3.6-8 8v32H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v32c0 4.4 3.6 8 8 8s8-3.6 8-8v-32h32c4.4 0 8-3.6 8-8s-3.6-8-8-8H56zm80 264c-4.4 0-8 3.6-8 8s3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
);

export default LanTransporter7Thin;
