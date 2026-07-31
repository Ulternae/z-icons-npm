import React from 'react';

export const MinaLetterSCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M14.5 9.25V9a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v.984a1.5 1.5 0 0 0 .943 1.393l3.114 1.246c.57.228.943.78.943 1.393V15a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-.25"})
);

export default MinaLetterSCircle;
