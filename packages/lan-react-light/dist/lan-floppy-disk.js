import React from 'react';

export function LanFloppyDisk({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V173.3c0-8.5-3.4-16.6-9.4-22.6l-77.2-77.3c-2.7-2.7-5.9-4.9-9.4-6.5V176c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V64zm64 0v112h160V64zM0 96c0-35.3 28.7-64 64-64h242.7c17 0 33.3 6.7 45.3 18.7l77.3 77.3c12 12 18.7 28.3 18.7 45.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm256 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
  );
}

export default LanFloppyDisk;
