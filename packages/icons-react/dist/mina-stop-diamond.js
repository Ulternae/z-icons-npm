import React from 'react';

export const MinaStopDiamond = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"}), React.createElement("path", {"d":"M9.5 12c0-1.178 0-1.768.366-2.134S10.822 9.5 12 9.5s1.768 0 2.134.366.366.956.366 2.134 0 1.768-.366 2.134-.956.366-2.134.366-1.768 0-2.134-.366S9.5 13.178 9.5 12"})
);

export default MinaStopDiamond;
