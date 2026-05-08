import React from 'react';

export const MinaCloudHail = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M19.825 17c4.495-3.16.475-7.73-3.706-7.73C13.296-1.732-3.265 7.368 4.074 15.662M12 16.5V15m4-.5V13m-8 1.5V13m4 7.5V19m4-.5V17m-8 1.5V17"})
);

export default MinaCloudHail;
