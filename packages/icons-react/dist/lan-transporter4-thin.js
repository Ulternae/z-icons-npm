import React from 'react';

export const LanTransporter4Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M248 8c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8m0 64c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8m-24 64c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H232c-4.4 0-8 3.6-8 8m-64 64c0 4.4 3.6 8 8 8h248c4.4 0 8-3.6 8-8s-3.6-8-8-8H168c-4.4 0-8 3.6-8 8m-40 64c0 4.4 3.6 8 8 8h320c4.4 0 8-3.6 8-8s-3.6-8-8-8H128c-4.4 0-8 3.6-8 8m0 64c0 4.4 3.6 8 8 8h320c4.4 0 8-3.6 8-8s-3.6-8-8-8H128c-4.4 0-8 3.6-8 8m72 64c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H200c-4.4 0-8 3.6-8 8m0 64c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H200c-4.4 0-8 3.6-8 8m-64 80c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-4.4 0-8 3.6-8 8m408-400c0-4.4-3.6-8-8-8s-8 3.6-8 8v32h-32c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v32c0 4.4 3.6 8 8 8s8-3.6 8-8v-32h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32zM56 360c0-4.4-3.6-8-8-8s-8 3.6-8 8v32H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v32c0 4.4 3.6 8 8 8s8-3.6 8-8v-32h32c4.4 0 8-3.6 8-8s-3.6-8-8-8H56z"})
);

export default LanTransporter4Thin;
