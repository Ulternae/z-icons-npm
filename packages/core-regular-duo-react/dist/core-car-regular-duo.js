import React from 'react';

export function CoreCarRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M64 320v64h384v-64c0-22.8-11.9-42.7-29.8-54.1l-.5.2-.2-.6c-9.7-6-21.2-9.5-33.4-9.5h-256c-12.3 0-23.7 3.5-33.5 9.5l-.2.6-.5-.2C75.9 277.3 64 297.2 64 320m96 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m256 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M314.8 32c55.1 0 104 35.3 121.4 87.5l35.9 107.7c24.6 23.3 39.9 56.3 39.9 92.8v192h-64v-64H64v64H0V320c0-36.5 15.3-69.5 39.8-92.8l36-107.7C93.2 67.3 142.1 32 197.2 32zM128 256c-12.3 0-23.7 3.5-33.5 9.5l-.2.6-.5-.2C75.9 277.3 64 297.2 64 320v64h384v-64c0-22.8-11.9-42.7-29.8-54.1l-.5.2-.2-.6c-9.7-6-21.2-9.5-33.4-9.5h-256zm0 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m256 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64M197.2 96c-27.5 0-52 17.6-60.7 43.8l-17.6 52.6c3-.2 6-.3 9.1-.3h256c3 0 6.1.1 9.1.3l-17.5-52.6c-8.8-26.2-33.2-43.8-60.8-43.8z"})
  );
}

export default CoreCarRegularDuo;
