import React from 'react';

export const MinaBrandChrome = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m10.992 20.946 4.122-7.146M4.755 6.654 8.886 13.8m11.367-5.4H12m0 7.2a3.6 3.6 0 1 0 0-7.2 3.6 3.6 0 0 0 0 7.2"}), React.createElement('path', {"d":"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"})
);

export default MinaBrandChrome;
