import React from 'react';

export function CoreFloppyDiskRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64v384h384V186.5l-100-100V128c0 33.1-26.9 60-60 60H160c-33.1 0-60-26.9-60-60V64zm288 256a96 96 0 1 1-192 0 96 96 0 1 1 192 0","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M512 448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64l.3-6.5C3.4 27.3 27.3 3.4 57.5.3L64 0h261.5l6.3.3c14.7 1.5 28.4 7.9 38.9 18.4l122.6 122.5c10.5 10.5 17 24.3 18.4 38.9l.3 6.3v261.5zM348 86.5V128c0 33.1-26.9 60-60 60H160c-33.1 0-60-26.9-60-60V64H64v384h384V186.5zM156 64v64c0 2.2 1.8 4 4 4h128c2.2 0 4-1.8 4-4V64zm4 256a96 96 0 1 1 192 0 96 96 0 1 1-192 0m136 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0"})
  );
}

export default CoreFloppyDiskRegularDuo;
