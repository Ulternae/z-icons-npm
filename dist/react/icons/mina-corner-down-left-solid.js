import React from 'react';

export const MinaCornerDownLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9.237 19.517a.75.75 0 0 0 1.06.027v-4.821H15a4.75 4.75 0 0 0 4.75-4.75V5a.75.75 0 0 0-1.5 0v4.973a3.25 3.25 0 0 1-3.25 3.25h-4.703V8.402a.75.75 0 0 0-1.06.027l-4.78 5.027a.75.75 0 0 0 0 1.034z"})
);

export default MinaCornerDownLeftSolid;
