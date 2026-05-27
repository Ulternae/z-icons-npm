import React from 'react';

export const CoreCircleArrowUpRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m60.2-3.8 112-112c10.9-10.9 28.7-10.9 39.6 0l112 112-39.6 39.6-64.2-64.2V384h-56V227.6l-64.2 64.2z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m-19.8 76.2c10.9-10.9 28.7-10.9 39.6 0l112 112-39.6 39.6-64.2-64.2V384h-56V227.6l-64.2 64.2-39.6-39.6z"})
);

export default CoreCircleArrowUpRegularDuo;
