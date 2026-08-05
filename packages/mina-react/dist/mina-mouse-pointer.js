import React from 'react';

export function MinaMousePointer({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m12.866 12.866 5.628-2.412c.942-.404.886-1.758-.086-2.082L5.469 4.059c-.871-.29-1.7.539-1.41 1.41l4.313 12.939c.324.972 1.678 1.028 2.082.086zm0 0L20 20"})
  );
}

export default MinaMousePointer;
