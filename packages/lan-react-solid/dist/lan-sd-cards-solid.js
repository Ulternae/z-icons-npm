import React from 'react';

export function LanSdCardsSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 448 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 448H160c-35.3 0-64-28.7-64-64V106.5c0-17 6.7-33.3 18.7-45.3l74.5-74.5c12-12 28.3-18.7 45.3-18.7H384c35.3 0 64 28.7 64 64v352c0 35.3-28.7 64-64 64M24 160c13.3 0 24 10.7 24 24v296c0 8.8 7.2 16 16 16h264c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-35.3 0-64-28.7-64-64V184c0-13.3 10.7-24 24-24M288 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24zm96 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
  );
}

export default LanSdCardsSolid;
