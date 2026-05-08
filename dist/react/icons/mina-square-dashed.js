import React from 'react';

export const MinaSquareDashed = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M9.4 21h5.2m-9.416-.436a4 4 0 0 1-1.748-1.748M3 14.6V9.4m18 5.2V9.4m-.436 9.416a4 4 0 0 1-1.748 1.748M14.6 3H9.4m9.416.436a4 4 0 0 1 1.748 1.748M5.184 3.436a4 4 0 0 0-1.748 1.748"})
);

export default MinaSquareDashed;
