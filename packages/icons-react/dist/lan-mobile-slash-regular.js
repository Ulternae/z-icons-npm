import React from 'react';

export const LanMobileSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M7-24.9c8.8-8.8 22.7-9.3 32.1-1.7l1.9 1.7 73 73.1c6.5-25.6 28.5-45.1 55.4-47.8l6.5-.3h224l6.5.3C438.8 3.6 464 30.9 464 64v334.2l105 105 1.7 1.8c7.7 9.4 7.1 23.3-1.7 32.1s-22.7 9.3-32.1 1.7l-1.9-1.7L7 9.1 5.4 7.2C-2.3-2.2-1.8-16.1 7-24.9m153 254.7V448c0 8.8 7.2 16 16 16h218.2l38.8 38.8c-7.9 4.7-16.8 7.9-26.4 8.9l-6.5.3h-224l-6.5-.3c-32.4-3.3-57.6-30.6-57.6-63.7V181.8zm181.8 181.8c-3.9 2.8-8.6 4.4-13.8 4.4h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24h50.2zM176 48c-8.8 0-16 7.2-16 16v30.2l256 256V64c0-8.8-7.2-16-16-16z"})
);

export default LanMobileSlashRegular;
