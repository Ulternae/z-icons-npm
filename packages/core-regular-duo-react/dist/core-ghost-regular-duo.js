import React from 'react';

export function CoreGhostRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M64 224v224h.3l38-32.6c24-20.5 59.3-20.5 83.3 0l38 32.6h.7l38-32.6c24-20.5 59.3-20.5 83.3 0l38 32.6h.3V224c0-88.4-71.6-160-160-160S64 135.6 64 224m136 0a40 40 0 1 1-80 0 40 40 0 1 1 80 0m128 0a40 40 0 1 1-80 0 40 40 0 1 1 80 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M224 0c123.7 0 224 100.3 224 224v288h-64.3c-15.3 0-30.1-5.5-41.7-15.4L304 464l-38 32.6c-11.6 9.9-26.4 15.4-41.7 15.4h-.7c-15.3 0-30.1-5.5-41.7-15.4l-38-32.6-38 32.6C94.4 506.5 79.6 512 64.3 512H0V224C0 100.3 100.3 0 224 0m0 64c-88.4 0-160 71.6-160 160v224h.3l38-32.6c24-20.5 59.3-20.5 83.3 0l38 32.6h.7l38-32.6c24-20.5 59.3-20.5 83.3 0l38 32.6h.3V224c0-88.4-71.6-160-160-160zm-64 200a40 40 0 1 1 0-80 40 40 0 1 1 0 80m128 0a40 40 0 1 1 0-80 40 40 0 1 1 0 80"})
  );
}

export default CoreGhostRegularDuo;
