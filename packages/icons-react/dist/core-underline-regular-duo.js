import React from 'react';

export const CoreUnderlineRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 544',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 32h256v192c0 70.7-57.3 128-128 128S96 294.7 96 224z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M448 480H0v64h448zm-96-256c0 70.7-57.3 128-128 128S96 294.7 96 224V32H32v192c0 106 86 192 192 192s192-86 192-192V32h-64z"})
);

export default CoreUnderlineRegularDuo;
