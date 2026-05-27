import React from 'react';

export const CoreBookOpenRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96.6c76.9 3.2 147.1 18.2 196 50.7V426c-57.9-27.5-127.1-38.8-194.7-41.5-.3 0-.5-.1-.7-.1s-.3-.2-.5-.3c-.1-.1-.1-.1-.1-.2z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M32 32H0v352c0 35.7 28.7 63.3 62.7 64.6 82.7 3.3 157 20.2 206.1 57L288 520l19.2-14.4c49.1-36.8 123.4-53.8 206.1-57 34-1.3 62.7-28.9 62.7-64.6V32h-32c-89.5 0-184.9 13.4-256 57.3C216.9 45.4 121.5 32 32 32m32 352V96.6c76.9 3.2 147.1 18.2 196 50.7V426c-57.9-27.5-127.1-38.8-194.7-41.5-.5 0-.9-.2-1.1-.5-.1-.1-.1-.1-.1-.2zm252 42.1V147.4c48.9-32.5 119.1-47.6 196-50.7V384s-.1.1-.1.2c-.2.2-.6.4-1.1.5-67.6 2.7-136.9 14-194.7 41.5z"})
);

export default CoreBookOpenRegularDuo;
