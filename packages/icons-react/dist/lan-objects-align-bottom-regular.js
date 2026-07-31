import React from 'react';

export const LanObjectsAlignBottomRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24h464c13.3 0 24 10.7 24 24s-10.7 24-24 24zm152-176V48h-64v288zm-64 48c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48zm288-48V176h-64v160zm-64 48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48z"})
);

export default LanObjectsAlignBottomRegular;
