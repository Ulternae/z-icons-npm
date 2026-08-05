import React from 'react';

export function LanRefrigerator({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 32c35.3 0 64 28.7 64 64v64h-64v-48c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H32V96c0-35.3 28.7-64 64-64zm-32 160v144c0 8.8 7.2 16 16 16s16-7.2 16-16V192h64v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192zM96 0C43 0 0 43 0 96v352c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V96c0-53-43-96-96-96z"})
  );
}

export default LanRefrigerator;
