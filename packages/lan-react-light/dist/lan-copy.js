import React from 'react';

export function LanCopy({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 64c0-17.7 14.3-32 32-32h132.1c8.5 0 16.6 3.4 22.6 9.4l59.9 59.9c6 6 9.4 14.1 9.4 22.6V320c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32zm32-64c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V123.9c0-17-6.7-33.3-18.7-45.3l-59.9-59.9C357.4 6.7 341.1 0 324.1 0zM64 128c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64v-16h-32v16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192c0-17.7 14.3-32 32-32h16v-32z"})
  );
}

export default LanCopy;
