import React from 'react';

export const LanHandHoldingBoxSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 121.7V0h-48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48h-48v121.7c0 3.5-2.8 6.3-6.3 6.3-1.1 0-2.2-.3-3.1-.8L296 100.6c-4.9-2.8-11-2.8-15.9 0l-46.6 26.6c-1 .5-2 .8-3.1.8-3.5 0-6.3-2.8-6.3-6.3zM109.3 341.5 66.7 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c17.7 0 32-14.3 32-32s-14.3-32-32-32H199.8c-33.9 0-66.5 13.5-90.5 37.5"})
);

export default LanHandHoldingBoxSolid;
