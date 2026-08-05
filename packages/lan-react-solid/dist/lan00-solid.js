import React from 'react';

export function Lan00Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 32C50.1 32 0 82.1 0 144v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112M64 144c0-26.5 21.5-48 48-48s48 21.5 48 48v224c0 26.5-21.5 48-48 48s-48-21.5-48-48zM400 32c-61.9 0-112 50.1-112 112v224c0 61.9 50.1 112 112 112s112-50.1 112-112V144c0-61.9-50.1-112-112-112m-48 112c0-26.5 21.5-48 48-48s48 21.5 48 48v224c0 26.5-21.5 48-48 48s-48-21.5-48-48z"})
  );
}

export default Lan00Solid;
