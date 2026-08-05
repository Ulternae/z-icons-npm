import React from 'react';

export function LanJoystick({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 0c61.9 0 112 50.1 112 112 0 56.4-41.7 103.1-96 110.8V352h144l6.5.3c32.3 3.3 57.5 30.5 57.5 63.7v32l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 448v-32c0-33.1 25.2-60.4 57.5-63.7l6.5-.3h144V222.8c-54.3-7.8-96-54.4-96-110.8C112 50.1 162.1 0 224 0M64 384c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32v-32c0-17.7-14.3-32-32-32zM224 32a80 80 0 1 0 0 160 80 80 0 1 0 0-160m-16 72a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
  );
}

export default LanJoystick;
