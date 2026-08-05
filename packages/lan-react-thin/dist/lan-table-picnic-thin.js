import React from 'react';

export function LanTablePicnicThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M47.4 443.1c-1.7 4.1-6.4 6-10.5 4.2-4.1-1.7-6-6.4-4.2-10.5L82 320h17.4zm432-6.2c1.7 4.1-.2 8.8-4.2 10.5s-8.8-.2-10.5-4.2l-52-123.1h17.4L479.4 437zM440 64c4.4 0 8 3.6 8 8s-3.6 8-8 8H328.7L403 256h101c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h101l74.3-176H72c-4.4 0-8-3.6-8-8s3.6-8 8-8zM200 80c0 1-.2 2.1-.6 3.1l-73 172.9h259.3l-73-172.9c-.4-1-.6-2.1-.6-3.1z"})
  );
}

export default LanTablePicnicThin;
