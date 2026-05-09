import React from 'react';

export const MinaDazeGhost = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m8 12 2-1.5L8 9m8 3-2-1.5L16 9m0 7.25-1.333-1-1.334 1-1.333-1-1.333 1-1.334-1-1.333 1"}), React.createElement('path', {"d":"M3 18.562v-6.518C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2-.835-.42-2.223-.52-3 0-.874.585-2.126.585-3 0-.885-.593-1.649-.57-2.5 0-.874.585-2.126.585-3 0-.777-.52-1.665-.42-2.5 0-1.033.519-2-.838-2-2"})
);

export default MinaDazeGhost;
