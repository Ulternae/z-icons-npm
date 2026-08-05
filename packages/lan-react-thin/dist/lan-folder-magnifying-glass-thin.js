import React from 'react';

export function LanFolderMagnifyingGlassThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 432H64c-26.5 0-48-21.5-48-48V96c0-26.5 21.5-48 48-48h138.7c10.4 0 20.5 3.4 28.8 9.6l38.4 28.8c8.3 6.2 18.4 9.6 28.8 9.6H448c26.5 0 48 21.5 48 48v240c0 26.5-21.5 48-48 48M64 448h384c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H298.7c-6.9 0-13.7-2.2-19.2-6.4l-38.4-28.8C230 36.5 216.5 32 202.7 32H64C28.7 32 0 60.7 0 96v288c0 35.3 28.7 64 64 64m184-270.4a70.4 70.4 0 1 1 0 140.8 70.4 70.4 0 1 1 0-140.8m0 158.4c21.4 0 41.1-7.7 56.3-20.4l42 42c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-42-42C328.3 289 336 269.4 336 248c0-48.6-39.4-88-88-88s-88 39.4-88 88 39.4 88 88 88"})
  );
}

export default LanFolderMagnifyingGlassThin;
