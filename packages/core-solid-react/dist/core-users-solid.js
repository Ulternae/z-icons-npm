import React from 'react';

export function CoreUsersSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480 320c88.4 0 160 71.6 160 160v32h-64v-32c0-49.4-37.3-90.1-85.3-95.4-11.4-24.2-27-46.1-45.9-64.6h35.3zm-192 64c11.2 0 22 2 32 5.5-27.3 9.6-48.8 31.2-58.5 58.5h-66.3c4.8-23.6 14.8-45.4 28.8-64zM416 0c70.7 0 128 57.3 128 128s-57.3 128-128 128c-15 0-29.4-2.6-42.8-7.4 13.8-17.1 24.8-36.5 32.1-57.6 3.5.6 7 1 10.7 1 35.3 0 64-28.7 64-64s-28.7-64-64-64c-3.6 0-7.2.4-10.7.9C398 43.8 387 24.3 373.2 7.3 386.6 2.6 400.9 0 415.9 0zM288 320c88.4 0 160 71.6 160 160v32H0v-32c0-88.4 71.6-160 160-160zm-64-64a128 128 0 1 1 0-256 128 128 0 1 1 0 256"})
  );
}

export default CoreUsersSolid;
