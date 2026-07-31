import React from 'react';

export function CoreFontCaseSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 416v-96h160v96h-32v64h128v-64h-32V176c0-79.5-64.5-144-144-144S32 96.5 32 176v240H0v64h128v-64zm448-288H416v64h128c17.7 0 32 14.3 32 32v32h-96c-53 0-96 43-96 96v32c0 53 43 96 96 96h64c11.2 0 22-1.9 32-5.5v5.5h64V224c0-53-43-96-96-96"})
  );
}

export default CoreFontCaseSolid;
