import React from 'react';

export function LanVrCardboard({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 128h448c17.7 0 32 14.3 32 32v192c0 17.7-14.3 32-32 32H394.5c-8.5 0-16.6-3.4-22.6-9.4L338 340.7c-13.3-13.3-31.3-20.7-50-20.7s-36.7 7.4-49.9 20.7l-33.9 33.9c-6 6-14.1 9.4-22.6 9.4H64c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32m448-32H64c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h117.5c17 0 33.3-6.7 45.3-18.7l33.9-33.9c7.2-7.2 17.1-11.3 27.3-11.3s20.1 4.1 27.3 11.3l33.9 33.9c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64M160 272a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-64-32a64 64 0 1 0 128 0 64 64 0 1 0-128 0m320 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m-64-32a64 64 0 1 0 128 0 64 64 0 1 0-128 0"})
  );
}

export default LanVrCardboard;
