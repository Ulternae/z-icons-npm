import React from 'react';

export const MinaListNumber = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M11 17.5h10M11 12h10M11 6.5h10M3.5 15.455v-.174c0-.777.672-1.406 1.5-1.406h.04c.807 0 1.46.613 1.46 1.368 0 .33-.114.65-.324.912L3.5 19.5h3m-3-14.063 2-.937v5.625"})
);

export default MinaListNumber;
