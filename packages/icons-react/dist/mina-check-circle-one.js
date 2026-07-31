import React from 'react';

export const MinaCheckCircleOne = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"m9 8.806 3.562 3.94a.788.788 0 0 0 1.206-.055L21 3"}), React.createElement("path", {"d":"M21 12a9 9 0 1 1-9-9"})
);

export default MinaCheckCircleOne;
