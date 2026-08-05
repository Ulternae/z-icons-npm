import React from 'react';

export function LanRectangleVerticalHistoryThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16c-26.5 0-48 21.5-48 48v384c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64h160c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H256c-35.3 0-64-28.7-64-64zm-96-8c0-4.4 3.6-8 8-8s8 3.6 8 8v400c0 4.4-3.6 8-8 8s-8-3.6-8-8zM0 104c0-4.4 3.6-8 8-8s8 3.6 8 8v304c0 4.4-3.6 8-8 8s-8-3.6-8-8z"})
  );
}

export default LanRectangleVerticalHistoryThin;
