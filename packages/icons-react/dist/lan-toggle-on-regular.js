import React from 'react';

export const LanToggleOnRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 112c-79.5 0-144 64.5-144 144s64.5 144 144 144h192c79.5 0 144-64.5 144-144s-64.5-144-144-144zM0 256C0 150 86 64 192 64h192c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256m384-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})
);

export default LanToggleOnRegular;
