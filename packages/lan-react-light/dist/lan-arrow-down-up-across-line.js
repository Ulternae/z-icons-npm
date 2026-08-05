import React from 'react';

export function LanArrowDownUpAcrossLine({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M283.3 139.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l112-112c6.2-6.2 16.4-6.2 22.6 0l112 112c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L400 54.6V240h96c8.8 0 16 7.2 16 16s-7.2 16-16 16H144v185.4l84.7-84.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-112 112c-6.2 6.2-16.4 6.2-22.6 0l-112-112c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l84.7 84.7V272H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h352V54.6zM400 320v176c0 8.8-7.2 16-16 16s-16-7.2-16-16V320zM112 16c0-8.8 7.2-16 16-16s16 7.2 16 16v176h-32z"})
  );
}

export default LanArrowDownUpAcrossLine;
