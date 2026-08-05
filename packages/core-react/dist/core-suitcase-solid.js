import React from 'react';

export function CoreSuitcaseSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320 4c33.1 0 60 26.9 60 60v32h68c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h68V64c0-33.1 26.9-60 60-60zM136 160v288h48V160zm192 288h48V160h-48zM192 60c-2.2 0-4 1.8-4 4v32h136V64c0-2.2-1.8-4-4-4z"})
  );
}

export default CoreSuitcaseSolid;
