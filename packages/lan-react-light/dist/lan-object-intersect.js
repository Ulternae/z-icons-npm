import React from 'react';

export function LanObjectIntersect({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32c-17.7 0-32 14.3-32 32v16H0V64C0 28.7 28.7 0 64 0h16v32zm160 0h-96V0h96zM32 128v96H0v-96zM0 288v-16h32v16c0 17.7 14.3 32 32 32h48v32H64c-35.3 0-64-28.7-64-64m160-32v-32c0-35.3 28.7-64 64-64h128v128c0 35.3-28.7 64-64 64H160zm320 32h32v96h-32zm32-48h-32v-16c0-17.7-14.3-32-32-32h-48v-32h48c35.3 0 64 28.7 64 64zm0 192v16c0 35.3-28.7 64-64 64h-16v-32h16c17.7 0 32-14.3 32-32v-16zm-128 80h-96v-32h96zM160 400h32v48c0 17.7 14.3 32 32 32h16v32h-16c-35.3 0-64-28.7-64-64zm192-288h-32V64c0-17.7-14.3-32-32-32h-16V0h16c35.3 0 64 28.7 64 64zm-32 80h-96c-17.7 0-32 14.3-32 32v96h96c17.7 0 32-14.3 32-32z"})
  );
}

export default LanObjectIntersect;
