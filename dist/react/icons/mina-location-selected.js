import React from 'react';

export const MinaLocationSelected = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12.435 16.86a.75.75 0 0 1-.87 0C7.809 14.183 3.822 8.677 7.852 4.698A5.9 5.9 0 0 1 12 3c1.556 0 3.048.61 4.148 1.697 4.03 3.979.043 9.485-3.713 12.164"}), React.createElement('path', {"d":"m6.5 17-2 4h15l-2-4M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"})
);

export default MinaLocationSelected;
