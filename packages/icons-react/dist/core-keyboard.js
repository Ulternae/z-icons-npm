import React from 'react';

export const CoreKeyboard = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M512 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM64 416h448V96H64zm352-36H160v-56h256zm-240-92h-64v-64h64zm96 0h-64v-64h64zm96 0h-64v-64h64zm96 0h-64v-64h64zm-288-96h-64v-64h64zm96 0h-64v-64h64zm96 0h-64v-64h64zm96 0h-64v-64h64z"})
);

export default CoreKeyboard;
