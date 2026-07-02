import React from 'react';

export function CoreShieldSlash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -45.2 640 602.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"m621.5 512-45.2 45.3L19 0l45.3-45.2zM160.3 231.8v33.6c0 60.6 34.2 116 88.4 143.1l71.6 35.8 35-17.5 47.7 47.7-82.7 41.3-100.2-50.1c-75.9-38-123.8-115.5-123.8-200.4v-97.6l64 64zM330.4 1.7l170.1 56.6c26.1 8.7 43.7 33.2 43.8 60.7v146.3c0 23.5-3.7 46.5-10.7 68.2l-54-54c.4-4.7.7-9.4.7-14.2V119l-160-53.3-40.9 13.6-50.6-50.6 81.4-27.1 10.1-3.4 10.1 3.4z"})
  );
}

export default CoreShieldSlash;
