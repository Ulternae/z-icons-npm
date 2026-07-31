import React from 'react';

export const LanBillboardThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 32c4.4 0 8 3.6 8 8v24h88c35.3 0 64 28.7 64 64v272h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H296v88c0 4.4-3.6 8-8 8s-8-3.6-8-8v-88H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h24V128c0-35.3 28.7-64 64-64h88V40c0-4.4 3.6-8 8-8s8 3.6 8 8v24h176V40c0-4.4 3.6-8 8-8m-96 368h240V128c0-26.5-21.5-48-48-48h-88v64h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8h40V80H200v64h40c4.4 0 8 3.6 8 8s-3.6 8-8 8h-96c-4.4 0-8-3.6-8-8s3.6-8 8-8h40V80H96c-26.5 0-48 21.5-48 48v272z"})
);

export default LanBillboardThin;
