import React from 'react';

export function CoreBackwardStepSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M384 448h-76.4l-9.2-8.3-176-160C115.8 273.6 112 265 112 256s3.8-17.6 10.5-23.7l176-160 9.2-8.3h76.4v384zm-320 0H0V64h64z"})
  );
}

export default CoreBackwardStepSolid;
