import React from 'react';

export function LanMobileArrowDownThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 16c26.5 0 48 21.5 48 48v384c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48zM80 0C44.7 0 16 28.7 16 64v384c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm64 440c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8m53.7-138.3 72-72c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L200 276.7V120c0-4.4-3.6-8-8-8s-8 3.6-8 8v156.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l72 72c3.1 3.1 8.2 3.1 11.3 0"})
  );
}

export default LanMobileArrowDownThin;
