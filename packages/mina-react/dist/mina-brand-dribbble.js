import React from 'react';

export function MinaBrandDribbble({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"}), React.createElement("path", {"d":"M3.07 10.875c1.7.102 6.2.195 9.08-1.035s5.358-3.492 6.208-4.21"}), React.createElement("path", {"d":"M8.625 3.654c1.409 1.3 4.482 4.61 5.625 7.896s1.566 7.326 1.827 8.476"}), React.createElement("path", {"d":"M21 12c-1.313 0-4.936-.495-8.178.928-3.522 1.547-6.072 3.946-7.184 5.438"})
  );
}

export default MinaBrandDribbble;
