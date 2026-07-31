import React from 'react';

export const MinaFatArrowUpLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M15.932 5.038c.315-.316-.062-1.027-.519-1.038H5.66c-.58 0-.871 0-1.093.113a1.04 1.04 0 0 0-.454.453C4 4.789 4 5.08 4 5.66v9.753c.01.457.722.834 1.038.519l2.714-2.78a.513.513 0 0 1 .725.018l6.671 6.671c.205.205.53.213.725.017l3.985-3.985a.513.513 0 0 0-.017-.725L13.17 8.477a.513.513 0 0 1-.017-.725z"})
);

export default MinaFatArrowUpLeft;
