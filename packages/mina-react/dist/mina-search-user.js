import React from 'react';

export function MinaSearchUser({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M14.5 15c0-3.861-6-3.861-6 0"}), React.createElement("path", {"d":"M11.5 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4"}), React.createElement("path", {"d":"M19 11.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0m-2.107 5.42 3.08 3.08"})
  );
}

export default MinaSearchUser;
