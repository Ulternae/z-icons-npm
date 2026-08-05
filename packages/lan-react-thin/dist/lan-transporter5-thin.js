import React from 'react';

export function LanTransporter5Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M536 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v32h-32c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v32c0 4.4 3.6 8 8 8s8-3.6 8-8V56h32c4.4 0 8-3.6 8-8s-3.6-8-8-8h-32zM56 136c0-4.4-3.6-8-8-8s-8 3.6-8 8v32H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h32v32c0 4.4 3.6 8 8 8s8-3.6 8-8v-32h32c4.4 0 8-3.6 8-8s-3.6-8-8-8H56zM248 8c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8m-24 128c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H232c-4.4 0-8 3.6-8 8M120 264c0 4.4 3.6 8 8 8h320c4.4 0 8-3.6 8-8s-3.6-8-8-8H128c-4.4 0-8 3.6-8 8m72 128c0 4.4 3.6 8 8 8h176c4.4 0 8-3.6 8-8s-3.6-8-8-8H200c-4.4 0-8 3.6-8 8m-64 144c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8s-3.6-8-8-8H136c-4.4 0-8 3.6-8 8"})
  );
}

export default LanTransporter5Thin;
