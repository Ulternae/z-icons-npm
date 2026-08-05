import React from 'react';

export function CoreEllipsisRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128m-192 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128m384 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128"})
  );
}

export default CoreEllipsisRegularDuo;
