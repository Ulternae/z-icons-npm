import React from 'react';

export const LanFilmAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 368v80h192V64H128zm-32 16H32v32c0 17.7 14.3 32 32 32h32zm0-32v-80H32v80zm0-112v-80H32v80zm0-112V64H64c-17.7 0-32 14.3-32 32v32zm256 224h64v-80h-64zm0-112h64v-80h-64zm0-112h64V96c0-17.7-14.3-32-32-32h-32zm0 256v64h32c17.7 0 32-14.3 32-32v-32zM64 32h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64"})
);

export default LanFilmAlt;
