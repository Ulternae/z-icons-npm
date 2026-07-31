import React from 'react';

export const LanObjectsAlignBottom = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 512c-8.8 0-16-7.2-16-16s7.2-16 16-16h480c8.8 0 16 7.2 16 16s-7.2 16-16 16zm160-160c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16zm-64 32c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48zm288-32c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16zm-64 32c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48z"})
);

export default LanObjectsAlignBottom;
