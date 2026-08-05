import React from 'react';

export function LanWindowFrameOpenRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M368 240H248V48h104c8.8 0 16 7.2 16 16zm-168 0H80V64c0-8.8 7.2-16 16-16h104zm216 48V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v224zM24 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V336h-48v128H80V336H32v128z"})
  );
}

export default LanWindowFrameOpenRegular;
