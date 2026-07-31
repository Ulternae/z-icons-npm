import React from 'react';

export const CoreWindSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 0v64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H0v64h224c53 0 96-43 96-96S277 0 224 0zm64 512h32c53 0 96-43 96-96s-43-96-96-96H0v64h288c17.7 0 32 14.3 32 32s-14.3 32-32 32h-32zM416 96h-32v64h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H0v64h416c53 0 96-43 96-96s-43-96-96-96"})
);

export default CoreWindSolid;
