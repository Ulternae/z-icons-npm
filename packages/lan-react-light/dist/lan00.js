import React from 'react';

export function Lan00({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112M32 144c0-44.2 35.8-80 80-80s80 35.8 80 80v224c0 44.2-35.8 80-80 80s-80-35.8-80-80zM400 32c-61.9 0-112 50.1-112 112v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112m-80 112c0-44.2 35.8-80 80-80s80 35.8 80 80v224c0 44.2-35.8 80-80 80s-80-35.8-80-80z"})
  );
}

export default Lan00;
