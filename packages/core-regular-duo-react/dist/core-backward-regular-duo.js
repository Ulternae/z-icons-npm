import React from 'react';

export function CoreBackwardRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M111.6 256c42.8 38.9 85.6 77.8 128.4 116.8V139.3c-42.8 38.9-85.6 77.8-128.4 116.8zm256 0c42.8 38.9 85.6 77.8 128.4 116.8V139.3c-42.8 38.9-85.6 77.8-128.4 116.8z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M528 64h32v384h-76.4l-9.2-8.3-170.5-155V448h-76.4l-9.2-8.3-176-160C35.8 273.6 32 265 32 256s3.8-17.6 10.5-23.7l176-160 9.2-8.3h76.4v163.3l170.5-155 9.2-8.3h44.4zM367.6 256 496 372.8V139.2zm-256 0L240 372.8V139.2z"})
  );
}

export default CoreBackwardRegularDuo;
