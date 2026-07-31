import React from 'react';

export function CoreHouse({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 192 256 48 64 192v256h96v-96c0-53 43-96 96-96s96 43 96 96v96h96zM216 448h80v-96c0-22.1-17.9-40-40-40s-40 17.9-40 40zm-56 64H64c-35.3 0-64-28.7-64-64V192c0-20.1 9.5-39.1 25.6-51.2L256-32l230.4 172.8c16.1 12.1 25.6 31.1 25.6 51.2v256c0 35.3-28.7 64-64 64z"})
  );
}

export default CoreHouse;
