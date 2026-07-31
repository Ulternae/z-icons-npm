import React from 'react';

export const CoreHourglass = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64h33.8c7.3 57.3 36.6 110.1 82.3 146.6l56.7 45.4-56.7 45.4C70.4 338 41.1 390.7 33.8 448H0v64h448v-64h-33.8c-7.3-57.3-36.6-110.1-82.3-146.6L275.2 256l56.7-45.4c45.7-36.6 75-89.3 82.3-146.6H448V0H0zm349.5 0c-6.8 37.8-27 72.3-57.5 96.7l-68 54.4-68-54.4c-30.5-24.4-50.7-58.9-57.5-96.7zM224 297l68 54.4c30.5 24.4 50.7 58.9 57.5 96.7h-251c6.8-37.8 27-72.3 57.5-96.7z"})
);

export default CoreHourglass;
