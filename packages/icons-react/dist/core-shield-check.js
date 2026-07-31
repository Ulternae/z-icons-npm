import React from 'react';

export const CoreShieldCheck = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -1.7 448 517.5',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m234.1 1.6 170.1 56.7C430.4 67 448 91.5 448 119v146.3c0 84.8-47.9 162.4-123.8 200.3L224 515.8l-100.2-50.1C47.9 427.7 0 350.2 0 265.3V119c0-27.5 17.6-52 43.8-60.7L213.9 1.6 224-1.7zM64 119v146.3c0 60.6 34.2 116 88.4 143.1l71.6 35.8 71.6-35.8c54.2-27.1 88.4-82.5 88.4-143.1V119L224 65.7zm279.6 89-19.8 19.8-112 112c-10.9 10.9-28.7 10.9-39.6 0L104.4 272l39.6-39.6 48 48 92.2-92.2 19.8-19.8z"})
);

export default CoreShieldCheck;
