import React from 'react';

export function MinaLetterKCircleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12m12.998-3.44a.75.75 0 0 0-.996-1.12L10.5 10.773V8A.75.75 0 0 0 9 8v8a.75.75 0 0 0 1.5 0v-2.774l3.752 3.335a.75.75 0 0 0 .996-1.122L11.378 12z"})
  );
}

export default MinaLetterKCircleSolid;
