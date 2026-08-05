import React from 'react';

export function LanIciclesThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 28.8C0 12.9 12.9 0 28.8 0H482c16.6 0 30 13.4 30 30 0 1.8-.2 3.7-.5 5.5l-87.6 470c-.7 3.8-4 6.5-7.9 6.5s-7.2-2.7-7.9-6.5l-65.8-351.1-46.6 159.9c-1 3.4-4 5.7-7.5 5.8s-6.6-2.2-7.7-5.5l-39-117-41.6 180.3c-.8 3.6-4.1 6.2-7.8 6.2s-7-2.6-7.8-6.2l-41.6-180.3-39 117c-1.1 3.3-4.2 5.5-7.7 5.5s-6.5-2.3-7.6-5.6l-87-277C.4 34.6 0 31.7 0 28.8M28.8 16C21.7 16 16 21.7 16 28.8c0 1.3.2 2.6.6 3.8L96.2 286l40.2-120.5c1.1-3.4 4.4-5.6 8-5.5s6.6 2.7 7.4 6.2L192 340.4l40.2-174.2c.8-3.5 3.8-6 7.4-6.2s6.8 2.1 8 5.5l39.9 119.7 48.8-167.4c1-3.6 4.4-5.9 8.1-5.8s6.8 2.9 7.5 6.5l64.1 342 79.8-428c.2-.8.2-1.7.2-2.6 0-7.7-6.3-14-14-14z"})
  );
}

export default LanIciclesThin;
