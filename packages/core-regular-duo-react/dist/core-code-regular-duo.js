import React from 'react';

export function CoreCodeRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -4.2 576.475 520.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"m356.7 4.9-4.5 31.7-64 448-4.5 31.7-63.4-9.1 4.5-31.7 64-448 4.5-31.7zM189.7 144l-112 112 112 112-45.2 45.2L9.9 278.6c-12.5-12.5-12.5-32.8 0-45.3L144.5 98.8zm377.4 89.4c12.5 12.5 12.5 32.8 0 45.3L432.5 413.3l-45.3-45.2 112-112-112-112 45.3-45.3z"})
  );
}

export default CoreCodeRegularDuo;
