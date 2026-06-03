import React from 'react';

export const LanTableRowsAddAboveSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64v192h320V32c33.1 0 60.4 25.2 63.7 57.5l.3 6.5v320l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320c-35.3 0-64-28.7-64-64zm384 320V288H64v128zM128 64c0-13.3 10.7-24 24-24h48V-8c0-13.3 10.7-24 24-24s24 10.7 24 24v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24V88h-48c-13.3 0-24-10.7-24-24"})
);

export default LanTableRowsAddAboveSolid;
