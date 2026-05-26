import React from 'react';

export const LanBarcodeReadRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-8.8 0-16 7.2-16 16v72c0 13.3-10.7 24-24 24S0 149.3 0 136zm352-40c0-13.3 10.7-24 24-24h72c35.3 0 64 28.7 64 64v72c0 13.3-10.7 24-24 24s-24-10.7-24-24V64c0-8.8-7.2-16-16-16h-72c-13.3 0-24-10.7-24-24M24 352c13.3 0 24 10.7 24 24v72c0 8.8 7.2 16 16 16h72c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-35.3 0-64-28.7-64-64v-72c0-13.3 10.7-24 24-24m464 0c13.3 0 24 10.7 24 24v72c0 35.3-28.7 64-64 64h-72c-13.3 0-24-10.7-24-24s10.7-24 24-24h72c8.8 0 16-7.2 16-16v-72c0-13.3 10.7-24 24-24M96 160c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32zm200-32c13.3 0 24 10.7 24 24v208c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24m56 32c0-17.7 14.3-32 32-32s32 14.3 32 32v192c0 17.7-14.3 32-32 32s-32-14.3-32-32zm-144-32c8.8 0 16 7.2 16 16v224c0 8.8-7.2 16-16 16s-16-7.2-16-16V144c0-8.8 7.2-16 16-16"})
);

export default LanBarcodeReadRegular;
