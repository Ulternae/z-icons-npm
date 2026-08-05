import React from 'react';

export function LanCommentAltLinesSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 128v224c0 53 43 96 96 96h32v72c0 13.3 10.7 24 24 24 5.2 0 10.2-1.7 14.4-4.8l115.2-86.4c4.2-3.1 9.2-4.8 14.4-4.8h120c53 0 96-43 96-96V128c0-53-43-96-96-96H96C43 32 0 75 0 128m152 48h208c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanCommentAltLinesSolid;
