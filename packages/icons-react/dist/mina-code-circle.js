import React from 'react';

export const MinaCodeCircle = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"m14.908 9.7.132.131c1.022 1.022 1.534 1.534 1.534 2.169s-.512 1.146-1.534 2.169l-.132.132M13.072 8l-2.143 8M9.092 9.7l-.132.131C7.938 10.853 7.427 11.365 7.427 12s.51 1.146 1.533 2.169l.132.132"})
);

export default MinaCodeCircle;
