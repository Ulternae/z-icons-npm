import React from 'react';

export const LanCartShoppingFastSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 640 528',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 8c0-13.3 10.7-24 24-24h45.3c27.1 0 50.3 19.4 55.1 46l.4 2h412.7c20 0 35.1 18.2 31.4 37.9l-31.1 165.9c-5.7 30.3-32.1 52.2-62.9 52.2H235.3l5.1 28.3c2.1 11.4 12 19.7 23.6 19.7h256c13.3 0 24 10.7 24 24s-10.7 24-24 24H264.1c-34.8 0-64.6-24.9-70.8-59.1L141.2 38.6c-.7-3.8-4-6.6-7.9-6.6H88C74.7 32 64 21.3 64 8m160 456a48 48 0 1 1 96 0 48 48 0 1 1-96 0m224 0a48 48 0 1 1 96 0 48 48 0 1 1-96 0M24 96h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h80c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h96c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanCartShoppingFastSolid;
