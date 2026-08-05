import React from 'react';

export function LanLockOpenAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 0c-53 0-96 43-96 96v64h64c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h160V96c0-70.7 57.3-128 128-128S576 25.3 576 96v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V96c0-53-43-96-96-96m-32 192H160c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32m-80 160h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16"})
  );
}

export default LanLockOpenAlt;
