import React from 'react';

export const CoreBusRegularDuo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 256v128h320V256zm96 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m192 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M416 0c70.7 0 128 57.3 128 128v384h-64v-64H160v64H96V128C96 57.3 153.3 0 224 0zM160 384h320V256H160zm64-32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64M64 288H0V160h64zm576 0h-64V160h64zM224 64c-35.3 0-64 28.7-64 64v64h320v-64c0-35.3-28.7-64-64-64z"})
);

export default CoreBusRegularDuo;
