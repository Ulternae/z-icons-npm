import React from 'react';

export const CoreCheckRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m493.5 128-22.6 22.6-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128L19 256l45.3-45.3 128 128 233.4-233.4 22.6-22.6 45.3 45.3z"})
);

export default CoreCheckRegularDuo;
