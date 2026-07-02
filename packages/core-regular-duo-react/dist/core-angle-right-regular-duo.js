import React from 'react';

export function CoreAngleRightRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"m51.2 448 192-192-192-192 45.2-45.2L311 233.4c12.5 12.5 12.5 32.8 0 45.3L96.5 493.3z"})
  );
}

export default CoreAngleRightRegularDuo;
