import React from 'react';

export function LanCircleBoltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m37.4-400c-5.6 0-11 2.2-15 6.2L151.3 245.4c-4.7 4.7-7.3 11-7.3 17.7 0 13.8 11.2 25 25 25h59l-29.3 83.8c-4.8 13.8 5.4 28.2 20 28.2 5.6 0 11-2.2 15-6.2l127-127.3c4.7-4.7 7.3-11 7.3-17.7 0-13.8-11.2-25-25-25h-59l29.3-83.8c4.8-13.8-5.4-28.2-20-28.2zM162.6 256.7l127.2-127.2c3.7-3.7 10.3.2 8.5 5.4l-33.1 94.5c-.9 2.4-.5 5.2 1 7.3s3.9 3.4 6.5 3.4h70.2c7.9 0 11.8 9.9 6.3 15.3l-127 127.1c-3.7 3.7-10.3-.2-8.5-5.4l33.1-94.5c1.7-4.9-2.4-10.6-7.6-10.6H169c-7.9 0-11.8-9.9-6.3-15.3z"})
  );
}

export default LanCircleBoltThin;
