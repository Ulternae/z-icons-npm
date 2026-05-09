import React from 'react';

export const MinaCornerUpLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9.237 4.483a.75.75 0 0 1 1.06-.026v4.82H15a4.75 4.75 0 0 1 4.75 4.75V19a.75.75 0 0 1-1.5 0v-4.973a3.25 3.25 0 0 0-3.25-3.25h-4.703v4.821a.75.75 0 0 1-1.06-.027l-4.78-5.027a.75.75 0 0 1 0-1.034z"})
);

export default MinaCornerUpLeftSolid;
