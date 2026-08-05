import React from 'react';

export function LanMegaphone({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 32c-8.8 0-16 7.2-16 16v17L32 191v-15c0-8.8-7.2-16-16-16s-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-15l102.3 28.8c-4.1 10.6-6.3 22.2-6.3 34.2 0 53 43 96 96 96 47 0 86.2-33.8 94.4-78.5L480 447v17c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16m-16 381.8-448-126v-63.5l448-126zm-192.6-21c-4.3 31.2-31 55.2-63.4 55.2-35.3 0-64-28.7-64-64 0-9.1 1.9-17.7 5.3-25.5z"})
  );
}

export default LanMegaphone;
