import React from 'react';

export function CoreJoystick({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 64a48 48 0 1 0 0 96 48 48 0 1 0 0-96m112 48c0 50.7-33.7 93.6-80 107.4V288h96v-32h64v32h64l6.5.3c32.3 3.3 57.5 30.5 57.5 63.7v96l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-384l-6.5-.3c-30.1-3.1-54.1-27-57.1-57.1L0 448v-96c0-33.1 25.2-60.4 57.5-63.7l6.5-.3h96v-68.6c-46.3-13.8-80-56.7-80-107.4C80 50.1 130.1 0 192 0s112 50.1 112 112m144 336v-96H64v96z"})
  );
}

export default CoreJoystick;
