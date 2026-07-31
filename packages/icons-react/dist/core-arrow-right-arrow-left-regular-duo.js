import React from 'react';

export const CoreArrowRightArrowLeftRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -13.3 448.075 538.6',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M9.4 406.6C85.6 482.9 125.1 522.4 128 525.3l45.3-45.3-64-64H448v-64H109.3l64-64-45.3-45.3L9.4 361.3c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6zm429.3-256c12.5-12.5 12.5-32.8 0-45.3L320.1-13.3 274.7 32l64 64H0v64h338.7l-64 64 45.3 45.2 118.6-118.6z"})
);

export default CoreArrowRightArrowLeftRegularDuo;
