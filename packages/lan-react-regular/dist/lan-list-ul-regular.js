import React from 'react';

export function LanListUlRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 64a32 32 0 1 0 0 64 32 32 0 1 0 0-64m120 0c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 168c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24zm0 168c-13.3 0-24 10.7-24 24s10.7 24 24 24h336c13.3 0 24-10.7 24-24s-10.7-24-24-24zM64 256a32 32 0 1 0-64 0 32 32 0 1 0 64 0M32 384a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
  );
}

export default LanListUlRegular;
