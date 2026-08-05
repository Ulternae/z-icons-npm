import React from 'react';

export function LanBellConciergeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M200 64c-4.4 0-8 3.6-8 8s3.6 8 8 8h48v64.1C128 148.4 32 247 32 368v16h16v-16c0-114.9 93.1-208 208-208s208 93.1 208 208v16h16v-16c0-121-96-219.6-216-223.9V80h48c4.4 0 8-3.6 8-8s-3.6-8-8-8zM8 432c-4.4 0-8 3.6-8 8s3.6 8 8 8h496c4.4 0 8-3.6 8-8s-3.6-8-8-8z"})
  );
}

export default LanBellConciergeThin;
