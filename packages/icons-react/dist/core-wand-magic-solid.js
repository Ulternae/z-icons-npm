import React from 'react';

export const CoreWandMagicSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432.3-29.3 550.9 89.3l22.6 22.7-22.6 22.6L189.5 496c-25 25-65.5 25-90.5 0l-50.7-50.7c-25-25-25-65.5 0-90.5L409.6-6.6zm0 90.5-69.6 69.6 50.7 50.7 69.6-69.6z"})
);

export default CoreWandMagicSolid;
