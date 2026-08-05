import React from 'react';

export function LanLocationArrowUpRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 70.2 64.7 415.4 204 351.6c12.7-5.8 27.3-5.8 40 0l139.3 63.8zM9.3 470.6c-9.5-9.5-12-23.8-6.4-36l192-416C200.2 7.3 211.5 0 224 0s23.8 7.3 29.1 18.6l192 416c5.6 12.2 3.1 26.5-6.4 36s-23.8 12.1-36 6.5L224 395.2 45.3 477.1c-12.2 5.6-26.5 3-36-6.5"})
  );
}

export default LanLocationArrowUpRegular;
