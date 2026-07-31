import React from 'react';

export const LanFireHydrantRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 0c-17.7 0-32 14.3-32 32v4c-45 11.6-80.4 47-92 92H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-12c-11.6-45-47-80.4-92-92v-4c0-17.7-14.3-32-32-32M56 464c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8v-80h16c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32h-16v-48h-48v256H112V208H64v48H48c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h16v80zm192-144a56 56 0 1 0-112 0 56 56 0 1 0 112 0"})
);

export default LanFireHydrantRegular;
