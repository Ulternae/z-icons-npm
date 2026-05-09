import React from 'react';

export const MinaBank = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12 8.94V18m5-9.06V18M7 8.94V18m5.447-14.894 7.764 3.908c.944.475.608 1.907-.447 1.907H4.236c-1.055 0-1.391-1.432-.447-1.907l7.764-3.908a1 1 0 0 1 .894 0M19.5 21h-15a1.5 1.5 0 0 1 0-3h15a1.5 1.5 0 0 1 0 3"})
);

export default MinaBank;
