import React from 'react';

export function LanFolderArrowLeftThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M202.7 32c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c4.2 3.1 9 5.2 14.1 6l5.1.4H448c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM64 48c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V144c0-26.5-21.5-48-48-48H298.7c-9.1 0-18-2.6-25.6-7.4l-3.2-2.2-38.4-28.8c-8.3-6.2-18.5-9.6-28.8-9.6zm171.6 137.3c3.1-2.1 7.3-1.7 10.1 1s3.1 7 1 10.1l-1 1.2-58.3 58.3h156.7c4.4 0 8 3.6 8 8s-3.6 8-8 8H187.4l58.3 58.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-72-72-1-1.3c-2-3.1-1.7-7.3 1-10.1l72-72 1.2-1z"})
  );
}

export default LanFolderArrowLeftThin;
