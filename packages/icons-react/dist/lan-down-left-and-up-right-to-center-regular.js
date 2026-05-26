import React from 'react';

export const LanDownLeftAndUpRightToCenterRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M296.1 256h148.7c19.5 0 35.3-15.8 35.3-35.3 0-9.4-3.7-18.3-10.3-25L442 168l54.1-54.1c18.7-18.7 18.7-49.1 0-67.9L466 16c-18.7-18.7-49.1-18.7-67.9 0L344 70.1l-27.7-27.7c-6.6-6.6-15.6-10.3-25-10.3-19.5 0-35.3 15.8-35.3 35.3v148.7c0 22.1 17.9 40 40 40zm95-71 23 23H304V97.9l23 23c9.4 9.4 24.6 9.4 33.9 0l71-71L462 80l-71 71c-9.4 9.4-9.4 24.6 0 33.9zM67.4 256c-19.5 0-35.3 15.8-35.3 35.3 0 9.4 3.7 18.3 10.3 25L70.1 344l-54 54.1c-18.7 18.7-18.7 49.1 0 67.9l30 30c18.7 18.7 49.1 18.7 67.9 0l54.1-54.1 27.7 27.7c6.6 6.6 15.6 10.3 25 10.3 19.5 0 35.3-15.8 35.3-35.3V295.9c0-22.1-17.9-40-40-40zm53.6 71-23-23h110.1v110.1l-23-23c-9.4-9.4-24.6-9.4-33.9 0l-71 71L50.1 432l71-71c9.4-9.4 9.4-24.6 0-33.9z"})
);

export default LanDownLeftAndUpRightToCenterRegular;
