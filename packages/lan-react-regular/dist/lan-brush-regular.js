import React from 'react';

export function LanBrushRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 288V64c0-8.8 7.2-16 16-16h32v88c0 13.3 10.7 24 24 24s24-10.7 24-24V48h48v56c0 13.3 10.7 24 24 24s24-10.7 24-24V48h80c8.8 0 16 7.2 16 16v224zM0 320c0 35.3 28.7 64 64 64h64v64c0 35.3 28.7 64 64 64s64-28.7 64-64v-64h64c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zm192 144c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16"})
  );
}

export default LanBrushRegular;
