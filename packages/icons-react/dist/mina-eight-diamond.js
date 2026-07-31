import React from 'react';

export const MinaEightDiamond = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12 12s2.5.5 2.5 2-1.12 2-2.5 2-2.5-.5-2.5-2 2.5-2 2.5-2m0 0s2.5-.5 2.5-2-1.12-2-2.5-2-2.5.5-2.5 2 2.5 2 2.5 2"}), React.createElement("path", {"d":"M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"})
);

export default MinaEightDiamond;
