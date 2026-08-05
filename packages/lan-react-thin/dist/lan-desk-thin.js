import React from 'react';

export function LanDeskThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M544 64c17.7 0 32 14.3 32 32v48c0 17.7-14.3 32-32 32v264c0 4.4-3.6 8-8 8s-8-3.6-8-8v-72H272v72c0 4.4-3.6 8-8 8s-8-3.6-8-8V176H48v264c0 4.4-3.6 8-8 8s-8-3.6-8-8V176c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM272 176v176h256V176zm168 80c4.4 0 8 3.6 8 8s-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8s3.6-8 8-8zM32 80c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16z"})
  );
}

export default LanDeskThin;
