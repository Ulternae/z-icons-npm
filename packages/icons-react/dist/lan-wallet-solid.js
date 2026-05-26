import React from 'react';

export const LanWalletSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H72c-13.3 0-24-10.7-24-24s10.7-24 24-24h384c13.3 0 24-10.7 24-24s-10.7-24-24-24zm352 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanWalletSolid;
