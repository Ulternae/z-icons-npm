import React from 'react';

export function CoreBus({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M422.6.2C490.2 3.6 544 59.5 544 128v384h-64v-64H160v64H96V128C96 59.5 149.8 3.6 217.4.2L224 0h192zM160 384h320V256H160zm64-32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64M64 288H0V160h64zm576 0h-64V160h64zM224 64c-35.3 0-64 28.7-64 64v64h320v-64c0-33.1-25.2-60.4-57.5-63.7L416 64z"})
  );
}

export default CoreBus;
