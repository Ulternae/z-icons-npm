import React from 'react';

export function CoreCircleQuestionRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m100-48c0-50.8 41.2-92 92-92s92 41.2 92 92-41.2 92-92 92h-32v-56h32c19.9 0 36-16.1 36-36s-16.1-36-36-36-36 16.1-36 36zm132 160a40 40 0 1 1-80 0 40 40 0 1 1 80 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m0 344a40 40 0 1 1 0-80 40 40 0 1 1 0 80m0-292c50.8 0 92 41.2 92 92s-41.2 92-92 92h-32v-56h32c19.9 0 36-16.1 36-36s-16.1-36-36-36-36 16.1-36 36h-56c0-50.8 41.2-92 92-92"})
  );
}

export default CoreCircleQuestionRegularDuo;
