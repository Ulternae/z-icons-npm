import React from 'react';

export const MinaLetterSDiamond = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M14.5 9.25V9a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v.984a1.5 1.5 0 0 0 .943 1.393l3.114 1.246c.57.228.943.78.943 1.393V15a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.25"}), React.createElement('path', {"d":"M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0z"})
);

export default MinaLetterSDiamond;
