import React from 'react';

export const LanPersonMeditatingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M364.3 394.3c26.8-5.3 51.7 15.1 51.7 42.4 0 23.9-19.4 43.3-43.3 43.3H75.2C51.3 480 32 460.6 32 436.7c0-27.3 25-47.8 51.7-42.4l140.3 28zM224 176c39.9 0 77.8 17.7 103.3 48.4L367 272h49c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64c-9.5 0-18.5-4.2-24.6-11.5L304 296.4v69.2l-80 16-80-16v-69.2l-23.4 28.1c-6.1 7.3-15.1 11.5-24.6 11.5H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h49l39.7-47.6 4.9-5.6c25.4-27.2 61-42.8 98.4-42.8m0-48a56 56 0 1 1 0-112 56 56 0 1 1 0 112"})
);

export default LanPersonMeditatingSolid;
