import React from 'react';

export const LanObjectsAlignBottomThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 512c-4.4 0-8-3.6-8-8s3.6-8 8-8h496c4.4 0 8 3.6 8 8s-3.6 8-8 8zm168-112c17.7 0 32-14.3 32-32V48c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32zm-64 16c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v320c0 26.5-21.5 48-48 48zm288-16c17.7 0 32-14.3 32-32V176c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32zm-64 16c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v192c0 26.5-21.5 48-48 48z"})
);

export default LanObjectsAlignBottomThin;
