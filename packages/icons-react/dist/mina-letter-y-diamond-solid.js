import React from 'react';

export const MinaLetterYDiamondSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.6 7.8a.75.75 0 1 0-1.2.9l2.85 3.8v3.75a.75.75 0 0 0 1.5 0V12.5l2.85-3.8a.75.75 0 1 0-1.2-.9L12 11z"})
);

export default MinaLetterYDiamondSolid;
