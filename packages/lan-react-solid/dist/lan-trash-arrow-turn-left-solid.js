import React from 'react';

export function LanTrashArrowTurnLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 448 528',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M136.7 5.9 128 32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96l-8.7-26.1C306.9-7.2 294.7-16 280.9-16H167.1c-13.8 0-26 8.8-30.4 21.9M416 144H32l21.1 323.1C54.7 492.4 75.7 512 101 512h246c25.3 0 46.3-19.6 47.9-44.9zm-198.2 71.9c8.9 9.9 8.1 25-1.8 33.9L182.5 280H240c48.6 0 88 39.4 88 88v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40c0-22.1-17.9-40-40-40h-57.5l33.5 30.2c9.9 8.9 10.7 24 1.8 33.9s-24 10.7-33.9 1.8l-80-72c-5.1-4.6-7.9-11-7.9-17.8s2.9-13.3 7.9-17.8l80-72c9.9-8.9 25-8.1 33.9 1.8z"})
  );
}

export default LanTrashArrowTurnLeftSolid;
