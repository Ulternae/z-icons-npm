import React from 'react';

export function CoreUserXmarkRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M64 480v32h320v-32c0-53-43-96-96-96H160c-53 0-96 43-96 96m96-352a64 64 0 1 0 128 0 64 64 0 1 0-128 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M288 320c88.4 0 160 71.6 160 160v32h-64v-32c0-53-43-96-96-96H160c-53 0-96 43-96 96v32H0v-32c0-88.4 71.6-160 160-160zm351.7-152.1L583.6 224l56.1 56.1-39.6 39.6-56.1-56.1-56.1 56.1-39.6-39.6 56.1-56.1-56.1-56.1 39.6-39.6 56.1 56.1 56.1-56.1zM224 256a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0-192a64 64 0 1 0 0 128 64 64 0 1 0 0-128"})
  );
}

export default CoreUserXmarkRegularDuo;
