import React from 'react';

export const LanUsbDrive = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 128c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h288V128zM0 160c0-35.3 28.7-64 64-64h288c17.7 0 32 14.3 32 32v256c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64zm544 224H432v-32h112V160H432v-32h112c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32m-40-168a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24 104a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
);

export default LanUsbDrive;
