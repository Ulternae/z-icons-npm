import React from 'react';

export const LanChartKanbanRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 80h48v288H48zM0 80v288c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48C21.5 32 0 53.5 0 80m464 0v352h-48V80zm-48-48c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM280 80v160h-48V80zm-48-48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"})
);

export default LanChartKanbanRegular;
