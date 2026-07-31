import React from 'react';

export function CoreAngleLeftRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m269.7 64-192 192 192 192-45.3 45.2L9.8 278.6c-12.5-12.5-12.5-32.8 0-45.3L224.5 18.7z"})
  );
}

export default CoreAngleLeftRegularDuo;
