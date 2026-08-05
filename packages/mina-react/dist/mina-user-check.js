import React from 'react';

export function MinaUserCheck({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M15 7.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m4.5 13c-.475-9.333-14.525-9.333-15 0"}), React.createElement("path", {"d":"m10.258 18.992 1.034 1.181c.095.109.266.1.35-.016l2.1-2.907"})
  );
}

export default MinaUserCheck;
