import React from 'react';

export const MinaHeadingThree = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M3.75 4.5v15m9.5-15v15M3.75 12h9.5M16 9.5h5l-3.5 4.507c2 0 3.5 1.001 3.5 3.004 0 2.744-3.408 3.206-5 1.452"})
);

export default MinaHeadingThree;
