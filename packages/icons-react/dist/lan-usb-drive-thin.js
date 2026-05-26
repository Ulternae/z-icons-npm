import React from 'react';

export const LanUsbDriveThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 112c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h288c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zM0 160c0-35.3 28.7-64 64-64h288c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64zm544 224H432v-16h112c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H432v-16h112c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32m-32-176a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16 112a16 16 0 1 1 0-32 16 16 0 1 1 0 32"})
);

export default LanUsbDriveThin;
