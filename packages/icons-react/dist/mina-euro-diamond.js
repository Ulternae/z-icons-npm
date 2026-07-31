import React from 'react';

export const MinaEuroDiamond = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"}), React.createElement("path", {"d":"M12 12H8.5m0 0H7m1.5 0c0 2 1.565 4 3.75 4 1.209 0 2.126-.267 2.75-.867M8.5 12c0-2 1.25-4 3.75-4 1.209 0 2.126.267 2.75.866"})
);

export default MinaEuroDiamond;
