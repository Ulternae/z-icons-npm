import React from 'react';

export function LanAlignSlashThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32.125 576.025 575.95',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L371.4 328H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H355.4l-112-112H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H227.4l-112-112H504c4.4 0 8-3.6 8-8s-3.6-8-8-8H99.4zM264.8 312H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h208.8zm-128-128H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h80.8zm256 256H72c-4.4 0-8 3.6-8 8s3.6 8 8 8h336.8z"})
  );
}

export default LanAlignSlashThin;
