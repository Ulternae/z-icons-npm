import React from 'react';

export function CoreFolders({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M320 0H192c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H384zM192 64h101.5l64 64H512v192H192zM64 160v-32H0v320c0 35.3 28.7 64 64 64h416v-64H64z"})
  );
}

export default CoreFolders;
