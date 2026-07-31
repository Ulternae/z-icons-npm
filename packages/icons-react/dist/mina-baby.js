import React from 'react';

export const MinaBaby = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M9 15c.85.63 1.885 1 3 1s2.15-.37 3-1M12.25 3a2.25 2.25 0 1 0 1.5 3.927m-4 3.373c-.214-.19-.473-.3-.75-.3s-.536.11-.75.3m7.5 0c-.214-.19-.473-.3-.75-.3s-.536.11-.75.3"})
);

export default MinaBaby;
