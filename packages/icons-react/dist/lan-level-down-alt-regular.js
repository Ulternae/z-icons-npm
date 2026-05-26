import React from 'react';

export const LanLevelDownAltRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 457.4 102.6 368H136c13.3 0 24-10.7 24-24V144c0-17.7-14.3-32-32-32H48V48h64c61.9 0 112 50.1 112 112v184c0 13.3 10.7 24 24 24h33.4zm-22.6 45.3c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9S333 320 320 320h-48V160C272 71.6 200.4 0 112 0H32C14.3 0 0 14.3 0 32v96c0 17.7 14.3 32 32 32h80v160H64c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"})
);

export default LanLevelDownAltRegular;
