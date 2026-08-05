import React from 'react';

export function LanChessClockSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 40c0-13.3-10.7-24-24-24H88c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v32H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64h-16c0-17.7-14.3-32-32-32h-96c-17.7 0-32 14.3-32 32H168V64h32c13.3 0 24-10.7 24-24m112.8 152.8a112 112 0 1 1 158.4 158.4 112 112 0 1 1-158.4-158.4m135.8 22.6c-9.4-9.4-24.6-9.4-33.9 0l-33.9 33.9c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l33.9-33.9c9.4-9.4 9.4-24.6 0-33.9M160 160a112 112 0 1 1 0 224 112 112 0 1 1 0-224m24 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
  );
}

export default LanChessClockSolid;
