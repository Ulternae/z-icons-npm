import React from 'react';

export const MinaUmbrella = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M15.636 13Q12 9.364 8.364 13C5.878 10.87 4.486 10.87 2 13 2 7.477 6.477 3 12 3s10 4.477 10 10c-2.486-2.13-3.878-2.13-6.364 0"}), React.createElement("path", {"d":"M12 11.5v7.273c0 3.519-5.5 3.519-5.5 0"})
);

export default MinaUmbrella;
