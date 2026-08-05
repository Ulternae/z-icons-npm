import React from 'react';

export function MinaCornerDownRightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14.763 19.517a.75.75 0 0 1-1.06.027v-4.821H9a4.75 4.75 0 0 1-4.75-4.75V5a.75.75 0 0 1 1.5 0v4.973A3.25 3.25 0 0 0 9 13.223h4.703V8.402a.75.75 0 0 1 1.06.027l4.78 5.027a.75.75 0 0 1 0 1.034z"})
  );
}

export default MinaCornerDownRightSolid;
