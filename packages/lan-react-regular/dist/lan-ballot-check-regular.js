import React from 'react';

export function LanBallotCheckRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 48c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 128a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64-224c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24m32 128c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48c-13.3 0-24 10.7-24 24m-32 128c0 13.3 10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80c-13.3 0-24 10.7-24 24m-.6-164.5c6.4-8.5 4.6-20.5-3.8-26.9s-20.5-4.6-26.9 3.8L112 240l-8.6-11.5C97 220 85 218.3 76.5 224.6s-10.2 18.4-3.9 26.9l24 32c3.6 4.8 9.3 7.7 15.4 7.7s11.7-2.8 15.4-7.7z"})
  );
}

export default LanBallotCheckRegular;
