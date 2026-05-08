import React from 'react';

export const MinaKanbanSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M11 18.5V5a1 1 0 1 1 2 0v13.5a1 1 0 1 1-2 0m6-4.5V5a1 1 0 1 1 2 0v9a1 1 0 1 1-2 0M5 13V5a1 1 0 0 1 2 0v8a1 1 0 1 1-2 0"})
);

export default MinaKanbanSolid;
