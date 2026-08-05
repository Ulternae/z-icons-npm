import React from 'react';

export function LanRectangleHistorySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 272c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v144c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64zm-72-168H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h368c13.3 0 24-10.7 24-24s-10.7-24-24-24M392 0H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24S405.3 0 392 0"})
  );
}

export default LanRectangleHistorySolid;
