import React from 'react';

export function LanAngleDoubleUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M203.3 52.7c-6.2-6.2-16.4-6.2-22.6 0l-160 160c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 86.6l148.7 148.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6zm160 352-160-160c-6.2-6.2-16.4-6.2-22.6 0l-160 160c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L192 278.6l148.7 148.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6"})
  );
}

export default LanAngleDoubleUp;
