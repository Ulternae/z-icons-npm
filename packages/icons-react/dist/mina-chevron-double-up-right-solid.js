import React from 'react';

export const MinaChevronDoubleUpRightSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M9.257 5.507a.75.75 0 0 0-.75.75l3.25 3.25h-6.5a.75.75 0 0 0-.75.75l9.236 9.236a.75.75 0 0 0 .75-.75v-6.5l3.25 3.25a.75.75 0 0 0 .75-.75V6.257a.75.75 0 0 0-.75-.75z"})
);

export default MinaChevronDoubleUpRightSolid;
