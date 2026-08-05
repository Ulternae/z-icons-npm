import React from 'react';

export function LanStairs({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M416 48c0-8.8 7.2-16 16-16h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H448v112c0 8.8-7.2 16-16 16H304v144c0 8.8-7.2 16-16 16H160v112c0 8.8-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h112V336c0-8.8 7.2-16 16-16h128V176c0-8.8 7.2-16 16-16h128z"})
  );
}

export default LanStairs;
