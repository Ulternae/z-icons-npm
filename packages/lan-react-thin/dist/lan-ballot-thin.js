import React from 'react';

export function LanBallotThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 16c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm112 128c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m0 128c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m0 128c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8s-3.6-8-8-8H184c-4.4 0-8 3.6-8 8m-80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-32 16a32 32 0 1 0 64 0 32 32 0 1 0-64 0m48-128a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-32a32 32 0 1 0 0 64 32 32 0 1 0 0-64m0-112a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-32 16a32 32 0 1 0 64 0 32 32 0 1 0-64 0"})
  );
}

export default LanBallotThin;
