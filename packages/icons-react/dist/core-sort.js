import React from 'react';

export const CoreSort = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32.1 384 576.2',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 320v-32h384v77.3L214.6 534.7c-6 6-14.1 9.4-22.6 9.4s-16.6-3.4-22.6-9.4L9.4 374.6 0 365.3zm192 146.7L306.7 352H77.3zM0 192v-45.3l9.4-9.4 160-160c6-6 14.1-9.4 22.6-9.4s16.6 3.4 22.6 9.4l160 160 9.4 9.4V224H0zM192 45.3 77.3 160h229.4z"})
);

export default CoreSort;
