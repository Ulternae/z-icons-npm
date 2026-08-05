import React from 'react';

export function LanSdCardThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M30.1 88.6c-9 9-14.1 21.2-14.1 33.9V448c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48H122.5c-12.7 0-24.9 5.1-33.9 14.1zM18.7 77.3l58.6-58.6C89.3 6.7 105.5 0 122.5 0H320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V122.5c0-17 6.7-33.3 18.7-45.3zM144 72v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8m80 0v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8m80 0v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanSdCardThin;
