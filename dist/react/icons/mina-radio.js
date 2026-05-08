import React from 'react';

export const MinaRadio = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-3.449 2.205a5.2 5.2 0 0 1-1.148-1.7 5.19 5.19 0 0 1 1.148-5.71M18.07 5.5a9.15 9.15 0 0 1 2.719 6.5 9.15 9.15 0 0 1-2.72 6.5M15.24 8.295a5.2 5.2 0 0 1 1.148 1.7 5.19 5.19 0 0 1-1.148 5.71M5.512 18.5A9.15 9.15 0 0 1 2.793 12c0-2.438.978-4.776 2.72-6.5"})
);

export default MinaRadio;
