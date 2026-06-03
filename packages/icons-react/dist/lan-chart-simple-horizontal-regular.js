import React from 'react';

export const LanChartSimpleHorizontalRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 96V48H48v48zm0 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v48c0 26.5-21.5 48-48 48m64 96H48v48h352zm48 48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zM208 432H48v48h160zm48 48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48v-48c0-26.5 21.5-48 48-48h160c26.5 0 48 21.5 48 48z"})
);

export default LanChartSimpleHorizontalRegular;
