import React from 'react';

export function CoreTrainSubway({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 557.3',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M358.8.2C426.5 3.6 480.3 59.5 480.3 128v224l-.2 6.6c-1.9 37.4-19.9 70.6-47.2 92.8l60.6 60.6-45.2 45.3-78.5-78.5c-3.6.5-7.2.9-10.9 1.1l-6.6.2h-192l-6.6-.2c-3.7-.2-7.4-.6-11-1.1l-78.5 78.5L19 512l60.6-60.6c-27.3-22.2-45.3-55.4-47.2-92.8l-.2-6.6V128C32.2 59.5 86 3.6 153.7.2l6.6-.2h192l6.6.2zM96.2 352c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64v-64h-320zm64 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m192 0a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-192-320c-35.3 0-64 28.7-64 64v96h132V64zm124 160h132v-96c0-33.1-25.2-60.4-57.5-63.7l-6.5-.3h-68z"})
  );
}

export default CoreTrainSubway;
