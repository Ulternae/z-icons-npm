import React from 'react';

export function CorePalette({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M256 0c141.4 0 256 114.6 256 256 0 39.2-8.9 76.4-24.7 109.7l-8.7 18.3H320c-17.7 0-32 14.3-32 32v96h-32C114.6 512 0 397.4 0 256S114.6 0 256 0m0 64C150 64 64 150 64 256c0 95.1 69.2 174 160 189.3V416c0-53 43-96 96-96h117c7.1-20 11-41.5 11-64 0-106-86-192-192-192m-96 204a44 44 0 1 1 0-88 44 44 0 1 1 0 88m192 0a44 44 0 1 1 0-88 44 44 0 1 1 0 88m-96-64a44 44 0 1 1 0-88 44 44 0 1 1 0 88"})
  );
}

export default CorePalette;
