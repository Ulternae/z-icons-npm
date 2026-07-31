import React from 'react';

export function CoreRadioSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -8 512 520.4',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m456.5 52.7-30.4 10.1-196.9 65.6H448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V183.5c0-27.5 17.6-52 43.8-60.7L405.9 2.1 436.2-8zM400 304.5a32 32 0 1 0 0-64 32 32 0 1 0 0 64m32 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-304-48a64 64 0 1 1 128 0 64 64 0 1 1-128 0m176 0a112 112 0 1 0-224 0 112 112 0 1 0 224 0"})
  );
}

export default CoreRadioSolid;
