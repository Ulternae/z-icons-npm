import React from 'react';

export function MinaLetterG({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M13.167 12h1.458c.345 0 .625.28.625.625v3.75c0 .345-.28.625-.625.625h-3.75A1.875 1.875 0 0 1 9 15.125v-6.25C9 7.839 9.84 7 10.875 7h2.5c1.036 0 1.875.84 1.875 1.875"})
  );
}

export default MinaLetterG;
