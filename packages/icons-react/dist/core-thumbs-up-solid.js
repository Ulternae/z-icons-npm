import React from 'react';

export const CoreThumbsUpSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 160 256 0c35.3 0 64 28.7 64 64v96h128c35.3 0 64 28.7 64 64v87.1c0 16.3-4.2 32.4-12.1 46.6l-31.3 56.4C446 454.8 403.2 480 356.7 480H0V160zm0 64H64v192h96z"})
);

export default CoreThumbsUpSolid;
