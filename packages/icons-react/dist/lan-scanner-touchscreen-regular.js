import React from 'react';

export const LanScannerTouchscreenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M120-32c-13.3 0-24 10.7-24 24v56h48V-8c0-13.3-10.7-24-24-24m272 320c13.3 0 24-10.7 24-24V-8c0-13.3-10.7-24-24-24s-24 10.7-24 24v272c0 13.3 10.7 24 24 24M320-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v68.6c11.6 3.4 22.3 8.7 32 15.4zM256 0c0-17.7-14.3-32-32-32s-32 14.3-32 32v48h64zm192 0v256c0 17.7 14.3 32 32 32s32-14.3 32-32V0c0-17.7-14.3-32-32-32s-32 14.3-32 32M256 144c8.8 0 16 7.2 16 16v288c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V160c0-8.8 7.2-16 16-16zM64 96c-35.3 0-64 28.7-64 64v288c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64zm64 128h64v160h-64zm-24-48c-13.3 0-24 10.7-24 24v208c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24V200c0-13.3-10.7-24-24-24z"})
);

export default LanScannerTouchscreenRegular;
