import React from 'react';

export function LanLeoRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0c70.7 0 128 57.3 128 128v1.4l-.2 1.3L352 408.9c.5 30.5 25.4 55.1 56 55.1 30.9 0 56-25.1 56-56v-48c0-13.3 10.7-24 24-24s24 10.7 24 24v48c0 57.4-46.6 104-104 104s-104-46.6-104-104v-1.4l.2-1.3L336 127.1c-.5-43.7-36.1-79-79.9-79-44.2 0-80 35.8-80 80v3.7c0 6.3.7 12.7 2.2 18.8L221 336.2c2 8.6 3 17.5 3 26.4v5.4c0 61.9-50.1 112-112 112S0 429.9 0 368s50.1-112 112-112c15.3 0 29.9 3.1 43.2 8.7l-23.8-103.4c-2.2-9.7-3.4-19.7-3.4-29.6V128C128 57.3 185.3 0 256 0M112 304a64 64 0 1 0 0 128 64 64 0 1 0 0-128"})
  );
}

export default LanLeoRegular;
