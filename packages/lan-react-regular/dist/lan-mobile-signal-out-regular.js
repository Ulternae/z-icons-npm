import React from 'react';

export function LanMobileSignalOutRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M344-32c128.1 0 232 103.9 232 232 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184-13.3 0-24-10.7-24-24s10.7-24 24-24m8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32-72c0-13.3 10.7-24 24-24 75.1 0 136 60.9 136 136 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88-13.3 0-24-10.7-24-24M96 0h176v48H96c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V270.4c5.2 1 10.5 1.6 16 1.6h32v176c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V64C32 28.7 60.7 0 96 0m72 368h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanMobileSignalOutRegular;
