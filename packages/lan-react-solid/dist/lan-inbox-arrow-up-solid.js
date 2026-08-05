import React from 'react';

export function LanInboxArrowUpSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M28.4 86.9C32.9 55.4 59.9 32 91.8 32h328.5c31.8 0 58.9 23.4 63.4 54.9l27.8 194.3c.4 3 .6 6 .6 9.1L512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V290.3c0-3 .2-6.1.6-9.1zM420.2 96H91.7L64.3 288h59.9c12.1 0 23.2 6.8 28.6 17.7l14.3 28.6c5.4 10.8 16.5 17.7 28.6 17.7h120.4c12.1 0 23.2-6.8 28.6-17.7l14.3-28.6c5.4-10.8 16.5-17.7 28.6-17.7h59.9L420.1 96zM273 135l64 64c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-23-23V296c0 13.3-10.7 24-24 24s-24-10.7-24-24v-86.1l-23 23c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l64-64c9.4-9.4 24.6-9.4 33.9 0z"})
  );
}

export default LanInboxArrowUpSolid;
