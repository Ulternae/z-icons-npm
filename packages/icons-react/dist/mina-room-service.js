import React from 'react';

export const MinaRoomService = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12 6.167V4m0 2.167a8 8 0 0 1 8 8V17H4v-2.833a8 8 0 0 1 8-8M3 20h18"})
);

export default MinaRoomService;
