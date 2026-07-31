import React from 'react';

export function CorePauseRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 256 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64H0v384h64zm192 0h-64v384h64z"})
  );
}

export default CorePauseRegularDuo;
