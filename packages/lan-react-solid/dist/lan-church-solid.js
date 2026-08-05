import React from 'react';

export function LanChurchSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M280-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v24h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v48l-98.6 65.8c-13.4 8.9-21.4 23.8-21.4 39.9V256l-79.8 45.6C12.3 313 0 334.2 0 357.1V448c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-90.9c0-23-12.3-44.2-32.2-55.6L400 256v-38.3c0-16-8-31-21.4-39.9L280 112V64h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32zm-24 328c35.3 0 64 28.7 64 64v80H192v-80c0-35.3 28.7-64 64-64"})
  );
}

export default LanChurchSolid;
