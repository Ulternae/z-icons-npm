import React from 'react';

export const LanArrowAltToTopSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 32C0 14.3 14.3 0 32 0h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 64 0 49.7 0 32m175 103c9.4-9.4 24.6-9.4 33.9 0L353 279c6.9 6.9 8.9 17.2 5.2 26.2S345.7 320 336 320h-80v144c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V320H48c-9.7 0-18.5-5.8-22.2-14.8S24.2 285.9 31 279z"})
);

export default LanArrowAltToTopSolid;
