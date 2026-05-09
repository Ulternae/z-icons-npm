import React from 'react';

export const MinaLetterKSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M15.997 6.336a1 1 0 0 0-1.411-.083L10 10.329V7a1 1 0 0 0-2 0v10a1 1 0 1 0 2 0v-3.329l4.586 4.076a1 1 0 0 0 1.328-1.494L11.13 12l4.784-4.253a1 1 0 0 0 .083-1.411"})
);

export default MinaLetterKSolid;
