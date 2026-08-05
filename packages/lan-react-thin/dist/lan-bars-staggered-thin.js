import React from 'react';

export function LanBarsStaggeredThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 72c0-4.4 3.6-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m64 184c0-4.4 3.6-8 8-8h432c4.4 0 8 3.6 8 8s-3.6 8-8 8H72c-4.4 0-8-3.6-8-8m384 184c0 4.4-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h432c4.4 0 8 3.6 8 8"})
  );
}

export default LanBarsStaggeredThin;
