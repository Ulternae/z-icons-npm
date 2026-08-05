import React from 'react';

export function LanFillRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m232.4 26.3-70.1 70.1L105 39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6-.1 34l57.4 57.4L26.3 232.5C9.5 249.3 0 272.1 0 296s9.5 46.7 26.3 63.6l126.1 126.1c16.9 16.8 39.7 26.3 63.6 26.3s46.7-9.5 63.6-26.3l206.1-206.1c16.8-16.9 26.3-39.7 26.3-63.6s-9.5-46.7-26.3-63.6L359.6 26.3C342.7 9.5 319.9 0 296 0s-46.7 9.5-63.6 26.3M215 217c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-52.7-52.7 70.1-70.1C274.2 52.4 284.9 48 296 48s21.8 4.4 29.7 12.3l126 126c7.9 7.9 12.3 18.5 12.3 29.7s-4.4 21.8-12.3 29.7L409.4 288H48.8c1.6-8.1 5.6-15.7 11.5-21.7l102-102zm146.4 119L245.7 451.7c-7.9 7.9-18.5 12.3-29.7 12.3s-21.8-4.4-29.7-12.3L70.6 336z"})
  );
}

export default LanFillRegular;
