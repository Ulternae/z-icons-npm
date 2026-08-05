import React from 'react';

export function LanFolderArrowUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 384c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h138.7c10.4 0 20.5 3.4 28.8 9.6l38.4 28.8c8.3 6.2 18.4 9.6 28.8 9.6H448c26.5 0 48 21.5 48 48zM64 448h384c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H298.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8C230 36.5 216.5 32 202.7 32H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64m197.7-277.7c-3.1-3.1-8.2-3.1-11.3 0l-72 72c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l58.3-58.3V352c0 4.4 3.6 8 8 8s8-3.6 8-8V195.3l58.3 58.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-72-72z"})
  );
}

export default LanFolderArrowUpThin;
