import React from 'react';

export function LanRobotThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M296-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v88H160c-53 0-96 43-96 96v224c0 53 43 96 96 96h256c53 0 96-43 96-96V160c0-53-43-96-96-96H296zm-8 104h128c44.2 0 80 35.8 80 80v224c0 44.2-35.8 80-80 80H160c-44.2 0-80-35.8-80-80V160c0-44.2 35.8-80 80-80zM160 360c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8m96 0c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8s-3.6-8-8-8h-40c-4.4 0-8 3.6-8 8m96 0c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8m-160-56a64 64 0 1 0 0-128 64 64 0 1 0 0 128m-48-64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m304 0a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-64-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m-368 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8zm552-8c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8s8-3.6 8-8V200c0-4.4-3.6-8-8-8"})
  );
}

export default LanRobotThin;
