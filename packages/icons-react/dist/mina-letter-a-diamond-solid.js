import React from 'react';

export const MinaLetterADiamondSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12.918 12.083h-1.836L12 9.636z"}), React.createElement('path', {"d":"M10.79 1.49a3.16 3.16 0 0 1 3.445.687l7.588 7.588a3.16 3.16 0 0 1 0 4.47l-7.588 7.588a3.16 3.16 0 0 1-4.47 0l-7.588-7.588a3.16 3.16 0 0 1 0-4.47l7.588-7.589a3.2 3.2 0 0 1 1.025-.685m1.912 5.747a.75.75 0 0 0-1.404 0l-3 8a.75.75 0 1 0 1.404.526l.818-2.18h2.96l.818 2.18a.75.75 0 1 0 1.404-.526z"})
);

export default MinaLetterADiamondSolid;
