import React from 'react';

export function CoreCircleRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M64 256c0 79.5 48.4 147.8 117.3 176.9 23 9.7 48.2 15.1 74.7 15.1q19.95 0 38.7-3.9C382.2 426.2 448 348.8 448 256c0-6.6-.3-13.2-1-19.6-.2-1.6-.3-3.2-.6-4.8-.1-.8-.2-1.6-.3-2.3l-.3-2.4c-.5-3.2-1-6.3-1.7-9.5-15.3-75-74.4-134.1-149.4-149.4q-18.75-3.9-38.7-3.9c-106 0-192 86-192 192z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384"})
  );
}

export default CoreCircleRegularDuo;
