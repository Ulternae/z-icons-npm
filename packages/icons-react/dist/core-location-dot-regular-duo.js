import React from 'react';

export const CoreLocationDotRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 192c0 27.7 9 54.7 25.6 76.8 34.1 45.5 68.3 91 102.4 136.6l102.4-136.6C311 246.7 320 219.7 320 192c0-70.7-57.3-128-128-128S64 121.3 64 192m168 0a40 40 0 1 1-80 0 40 40 0 1 1 80 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M38.4 307.2A192.2 192.2 0 0 1 0 192C0 86 86 0 192 0s192 86 192 192c0 41.5-13.5 82-38.4 115.2L192 512zm256-38.4C311 246.7 320 219.7 320 192c0-70.7-57.3-128-128-128S64 121.3 64 192c0 27.7 9 54.7 25.6 76.8L192 405.4zM192 152a40 40 0 1 1 0 80 40 40 0 1 1 0-80"})
);

export default CoreLocationDotRegularDuo;
