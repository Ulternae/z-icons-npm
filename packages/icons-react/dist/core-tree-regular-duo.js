import React from 'react';

export const CoreTreeRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96.1 384h128V224h64v160h128c-45.2-60.3-70-93.3-74.3-99l32.5-32.5L256.1 87c-39.4 55.2-78.8 110.3-118.2 165.5l32.5 32.5c-4.3 5.7-29 38.7-74.3 99","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"m137.9 252.5 32.5 32.5c-4.3 5.7-29 38.7-74.3 99h128V224h64v160h128c-45.2-60.3-70-93.3-74.3-99l32.5-32.5L256.1 87zM224.1 448h-176c-33 0-51.8-37.6-32-64l69.7-93-7.6-7.6c-13.8-13.8-15.6-35.6-4.3-51.5L223.5 22.5c16-22.3 49.1-22.3 65.1 0l149.6 209.4c11.4 15.9 9.6 37.7-4.3 51.5l-7.6 7.6 69.7 93c19.8 26.4 1 64-32 64H288v64h-64v-64z"})
);

export default CoreTreeRegularDuo;
