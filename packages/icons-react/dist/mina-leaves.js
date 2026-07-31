import React from 'react';

export const MinaLeaves = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12 12.07V20m0-8.07c0-4.353 3.538-7.887 7.919-7.93q.08.556.081 1.132c0 4.353-3.538 7.886-7.919 7.93A8 8 0 0 1 12 11.928m0 0C12 7.576 8.462 4.042 4.081 4q-.08.556-.081 1.132c0 4.353 3.538 7.886 7.919 7.93A8 8 0 0 0 12 11.928"})
);

export default MinaLeaves;
