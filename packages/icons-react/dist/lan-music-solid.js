import React from 'react';

export const LanMusicSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M468 7c7.6 6.1 12 15.3 12 25v304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6V143.9l-224 49.8V400c0 44.2-43 80-96 80S0 444.2 0 400s43-80 96-80c11.2 0 22 1.6 32 4.6V96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4.2 27 6.3z"})
);

export default LanMusicSolid;
