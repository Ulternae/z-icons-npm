import React from 'react';

export function LanArrowsCross({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M27.3 36.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l162.7 162.8 22.7-22.7zM393.4 448H304c-8.8 0-16 7.2-16 16s7.2 16 16 16h128c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16s-16 7.2-16 16v89.4L280.6 290 258 312.6zM304 32c-8.8 0-16 7.2-16 16s7.2 16 16 16h89.4L4.7 452.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L416 86.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16z"})
  );
}

export default LanArrowsCross;
