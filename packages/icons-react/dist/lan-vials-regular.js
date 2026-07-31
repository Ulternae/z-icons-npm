import React from 'react';

export const LanVialsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24h8v368c0 53 43 96 96 96s96-43 96-96V48h64v368c0 53 43 96 96 96s96-43 96-96V48h8c13.3 0 24-10.7 24-24S501.3 0 488 0zm152 48v144H80V48zM80 416V240h96v176c0 26.5-21.5 48-48 48s-48-21.5-48-48M432 48v144h-96V48zm-96 368V240h96v176c0 26.5-21.5 48-48 48s-48-21.5-48-48"})
);

export default LanVialsRegular;
