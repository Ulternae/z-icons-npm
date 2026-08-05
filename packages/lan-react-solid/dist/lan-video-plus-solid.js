import React from 'react';

export function LanVideoPlusSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 128c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64zm505.5-10.8c4.2-3.4 9.4-5.2 14.8-5.2 13.1 0 23.7 10.6 23.7 23.7v240.6c0 13.1-10.6 23.7-23.7 23.7-5.4 0-10.6-1.8-14.8-5.2L464 336V176zM224 160c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24"})
  );
}

export default LanVideoPlusSolid;
