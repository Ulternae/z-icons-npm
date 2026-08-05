import React from 'react';

export function LanSemicolon({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64.4 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-32 222.4c0 5.6-1.5 11.1-4.5 15.9L55.8 477.9c-.8 1.3-2.3 2.1-3.8 2.1-2.8 0-4.9-2.5-4.4-5.2L71 343.9c2.5-13.8 14.5-23.9 28.5-23.9 16 0 29 13 29 29v1.5zm32 0v-1.5c0-33.7-27.3-61-61-61-29.5 0-54.8 21.2-60 50.2l-23.3 131C12.1 491.4 29.3 512 52 512c12.7 0 24.5-6.6 31.1-17.4L151.3 383c6-9.8 9.2-21.1 9.2-32.6z"})
  );
}

export default LanSemicolon;
