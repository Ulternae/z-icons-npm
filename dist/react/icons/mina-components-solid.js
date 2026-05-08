import React from 'react';

export const MinaComponentsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12.53 2.47a.75.75 0 0 0-1.06 0L8.32 5.62a.75.75 0 0 0 0 1.06l3.15 3.15a.75.75 0 0 0 1.06 0l3.15-3.15a.75.75 0 0 0 0-1.06zm5.85 6.3a.75.75 0 0 0-1.06 0l-3.15 3.15a.75.75 0 0 0 0 1.06l3.15 3.15a.75.75 0 0 0 1.06 0l3.15-3.15a.75.75 0 0 0 0-1.06zm-5.85 5.4a.75.75 0 0 0-1.06 0l-3.15 3.15a.75.75 0 0 0 0 1.06l3.15 3.15a.75.75 0 0 0 1.06 0l3.15-3.15a.75.75 0 0 0 0-1.06zM6.68 8.32a.75.75 0 0 0-1.06 0l-3.15 3.15a.75.75 0 0 0 0 1.06l3.15 3.15a.75.75 0 0 0 1.06 0l3.15-3.15a.75.75 0 0 0 0-1.06z"})
);

export default MinaComponentsSolid;
