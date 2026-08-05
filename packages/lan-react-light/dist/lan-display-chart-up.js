import React from 'react';

export function LanDisplayChartUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 64H64c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32M64 32h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H330.9l10.7 64H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16h58.4l10.7-64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64m149.6 384-10.7 64h106.2l-10.7-64h-84.9zM304 128h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16s-16-7.2-16-16v-57.4L267.3 299.3c-3 3-7.1 4.7-11.3 4.7s-8.3-1.7-11.3-4.7L176 230.6l-68.7 68.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l80-80c6.2-6.2 16.4-6.2 22.6 0l68.7 68.7L361.4 160H304c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
  );
}

export default LanDisplayChartUp;
