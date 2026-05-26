import React from 'react';

export const LanChartSimpleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 80v352h-48V80zm-48-48c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM112 272v160H64V272zm-48-48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm384-80h48v288h-48zm-48 0v288c0 26.5 21.5 48 48 48h48c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48h-48c-26.5 0-48 21.5-48 48"})
);

export default LanChartSimpleRegular;
