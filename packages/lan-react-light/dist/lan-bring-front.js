import React from 'react';

export function LanBringFront({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 0H64C46.3 0 32 14.3 32 32v96c0 17.7 14.3 32 32 32h16v32H64c-35.3 0-64-28.7-64-64V32C0-3.3 28.7-32 64-32h96c35.3 0 64 28.7 64 64v16h-32V32c0-17.7-14.3-32-32-32m192 464h32v16c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32h-16v-32h16c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-96c-35.3 0-64-28.7-64-64zm-49.4-336L160 270.6V352c0 2.9.4 5.6 1.1 8.3l231.2-231.2c-2.6-.7-5.4-1.1-8.3-1.1zm-45.3 0H192c-17.7 0-32 14.3-32 32v65.4l97.4-97.4zM296 96h88c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm22.6 288H384c17.7 0 32-14.3 32-32v-65.4zM416 241.4V160c0-2.9-.4-5.6-1.1-8.3L183.7 382.9c2.6.7 5.4 1.1 8.3 1.1h81.4z"})
  );
}

export default LanBringFront;
