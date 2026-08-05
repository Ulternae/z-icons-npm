import React from 'react';

export function LanBallotSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm64 128a32 32 0 1 1-64 0 32 32 0 1 1 64 0m0 128a32 32 0 1 1-64 0 32 32 0 1 1 64 0M96 416a32 32 0 1 1 0-64 32 32 0 1 1 0 64m80-32c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24m24-280h96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24s10.7-24 24-24m-24 152c0-13.3 10.7-24 24-24h96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24"})
  );
}

export default LanBallotSolid;
