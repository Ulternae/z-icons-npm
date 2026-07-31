import React from 'react';

export const CoreVideo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 96v320h288V96zm352 274.3V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h288c35.3 0 64 28.7 64 64v45.7c69.3-19.8 122.7-35 160-45.7v320c-37.3-10.7-90.7-25.9-160-45.7m0-66.6 96 27.4V180.8l-96 27.4v95.4z"})
);

export default CoreVideo;
