import React from 'react';

export function LanCommentMiddleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m188 440 44.8 89.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L324 440c108.4-26 188-112.9 188-216C512 100.3 397.4 0 256 0S0 100.3 0 224c0 103.1 79.6 190 188 216"})
  );
}

export default LanCommentMiddleSolid;
