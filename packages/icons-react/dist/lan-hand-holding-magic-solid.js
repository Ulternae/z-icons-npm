import React from 'react';

export const LanHandHoldingMagicSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 0c-79.5 0-144 64.5-144 144 0 48.6 39.4 88 88 88s88-39.4 88-88c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80v4.4c0 22.1-6.5 43.7-18.8 62.1l-7.8 11.7c-9.8 14.7-5.8 34.6 8.9 44.4s34.6 5.8 44.4-8.9l7.8-11.7c19.3-28.9 29.6-62.9 29.6-97.6V144C432 64.5 367.5 0 288 0M109.3 341.5 66.7 384H32c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h320.5c29 0 57.3-9.3 80.7-26.5l126.6-93.3c17.8-13.1 21.6-38.1 8.5-55.9s-38.1-21.6-55.9-8.5L392.6 416H280c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c17.7 0 32-14.3 32-32s-14.3-32-32-32H199.8c-33.9 0-66.5 13.5-90.5 37.5"})
);

export default LanHandHoldingMagicSolid;
