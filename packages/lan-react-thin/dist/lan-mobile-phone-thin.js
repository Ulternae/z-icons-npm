import React from 'react';

export function LanMobilePhoneThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zM16 64C16 28.7 44.7 0 80 0h224c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64zm136 368h80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8"})
  );
}

export default LanMobilePhoneThin;
