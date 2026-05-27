import React from 'react';

export const CoreVideoSlash = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.2L19 0l45.3-45.3zM96.3 167.7V416h248.3l60.5 60.5c-6.5 2.2-13.5 3.5-20.7 3.5h-288c-35.3 0-64-28.7-64-64V103.7l64 64zM384.3 32c35.3 0 64 28.7 64 64v45.7c69.3-19.8 122.7-35.1 160-45.7v312.3l-64-64V180.9l-96 27.4v40l-64-64V96.1H296l-64-64h152.3z"})
);

export default CoreVideoSlash;
