import React from 'react';

export function LanBriefcase({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 48v48h128V48c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16m-32 48V48c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v48h96c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm176 32H64c-17.7 0-32 14.3-32 32v96h448v-96c0-17.7-14.3-32-32-32zm144 160H336v48c0 17.7-14.3 32-32 32h-96c-17.7 0-32-14.3-32-32v-48H32v128c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32zm-272 0v48h96v-48z"})
  );
}

export default LanBriefcase;
