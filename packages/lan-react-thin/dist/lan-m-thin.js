import React from 'react';

export function LanMThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M5.6 32.4c3.3-1.1 6.9.1 9 3L224 330.2 433.5 35.4c2-2.8 5.6-4 9-3s5.5 4.1 5.5 7.6v424c0 4.4-3.6 8-8 8s-8-3.6-8-8V65.1L230.5 348.7c-1.5 2.1-3.9 3.4-6.5 3.4s-5-1.3-6.5-3.4L16 65.1V472c0 4.4-3.6 8-8 8s-8-3.6-8-8V40c0-3.5 2.3-6.6 5.6-7.6"})
  );
}

export default LanMThin;
