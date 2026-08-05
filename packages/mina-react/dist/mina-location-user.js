import React from 'react';

export function MinaLocationUser({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12.56 20.82a.96.96 0 0 1-1.12 0C6.611 17.378 1.486 10.298 6.667 5.182A7.6 7.6 0 0 1 12 3c2 0 3.919.785 5.333 2.181 5.181 5.116.056 12.196-4.773 15.64"}), React.createElement("path", {"d":"M15 14c0-3.861-6-3.861-6 0"}), React.createElement("path", {"d":"M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4"})
  );
}

export default MinaLocationUser;
