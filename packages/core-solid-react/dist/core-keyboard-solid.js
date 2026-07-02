import React from 'react';

export function CoreKeyboardSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M512 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM160 376h256v-48H160zm-48-88h64v-64h-64zm96 0h64v-64h-64zm96 0h64v-64h-64zm96 0h64v-64h-64zm-288-96h64v-64h-64zm96 0h64v-64h-64zm96 0h64v-64h-64zm96-64v64h64v-64z"})
  );
}

export default CoreKeyboardSolid;
