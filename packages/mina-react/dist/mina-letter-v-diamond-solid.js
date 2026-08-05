import React from 'react';

export function MinaLetterVDiamondSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685M9.702 7.988a.75.75 0 0 0-1.404.526l3 8a.75.75 0 0 0 1.404 0l3-8a.75.75 0 0 0-1.404-.526L12 14.114z"})
  );
}

export default MinaLetterVDiamondSolid;
