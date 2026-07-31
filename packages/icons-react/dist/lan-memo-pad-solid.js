import React from 'react';

export const LanMemoPadSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v32h384V64c0-35.3-28.7-64-64-64zm320 144H0v304c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64zm-280 48h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24s10.7-24 24-24m0 96h96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-96c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanMemoPadSolid;
