import React from 'react';

export function CoreEqualsRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M448 384H0v-64h448zm0-192H0v-64h448z"})
  );
}

export default CoreEqualsRegularDuo;
