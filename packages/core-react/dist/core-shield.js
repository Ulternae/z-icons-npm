import React from 'react';

export function CoreShield({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -1.7 448 517.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"m234.1 1.6 170.1 56.7C430.4 67 448 91.5 448 119v146.3c0 84.8-47.9 162.4-123.8 200.3L224 515.8l-100.2-50.1C47.9 427.7 0 350.2 0 265.3V119c0-27.5 17.6-52 43.8-60.7L213.9 1.6 224-1.7zM64 119v146.3c0 60.6 34.2 116 88.4 143.1l71.6 35.8 71.6-35.8c54.2-27.1 88.4-82.5 88.4-143.1V119L224 65.7z"})
  );
}

export default CoreShield;
