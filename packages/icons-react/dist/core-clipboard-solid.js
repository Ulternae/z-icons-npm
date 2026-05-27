import React from 'react';

export const CoreClipboardSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 128h192V32h64c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h64zm96-160c35.3 0 64 28.7 64 64v64H160V32c0-35.3 28.7-64 64-64"})
);

export default CoreClipboardSolid;
