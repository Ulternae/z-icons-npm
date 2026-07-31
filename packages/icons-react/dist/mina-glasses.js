import React from 'react';

export const MinaGlasses = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M16.5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-9 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6"}), React.createElement("path", {"d":"M13.5 15.16c-1.042-.371-1.937-.379-3 0m9-.16-.572-6.296c-.166-1.825-.73-2.14-2.428-2.704m-12 9 .572-6.296C5.238 6.88 5.802 6.564 7.5 6"})
);

export default MinaGlasses;
