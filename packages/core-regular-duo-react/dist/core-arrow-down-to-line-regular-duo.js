import React from 'react';

export function CoreArrowDownToLineRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M448 512H0v-64h448zM256 242.8l96-96 45.3 45.2-150.6 150.6-2.4 2.2c-12.6 10.2-31.1 9.5-42.8-2.2L50.8 192 96 146.8l96 96V0h64z"})
  );
}

export default CoreArrowDownToLineRegularDuo;
