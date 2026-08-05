import React from 'react';

export function LanRectangleSdSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm96 88v8c0 30.9 25.1 56 56 56h32c4.4 0 8 3.6 8 8v8c0 4.4-3.6 8-8 8h-56c-13.3 0-24 10.7-24 24s10.7 24 24 24h56c30.9 0 56-25.1 56-56v-8c0-30.9-25.1-56-56-56h-32c-4.4 0-8-3.6-8-8v-8c0-4.4 3.6-8 8-8h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56c-30.9 0-56 25.1-56 56m200-56c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24h48c39.8 0 72-32.2 72-72v-48c0-39.8-32.2-72-72-72zm24 144v-96h24c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24z"})
  );
}

export default LanRectangleSdSolid;
