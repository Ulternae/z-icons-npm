import React from 'react';

export function CoreForwardSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M64 64H32v384h76.4l9.2-8.3 170.5-155V448h76.4l9.2-8.3 176-160c6.5-6.1 10.3-14.7 10.3-23.7s-3.8-17.6-10.5-23.7l-176-160-9.2-8.3h-76.4v163.3l-170.5-155-9.2-8.3H63.8z"})
  );
}

export default CoreForwardSolid;
