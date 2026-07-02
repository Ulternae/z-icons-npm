import React from 'react';

export function CoreImagesRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M192 64v256h24.4l147.8-147.8c5.3-5.3 12.4-8.2 19.8-8.2s14.5 3 19.8 8.2L512 280.4V64zm120 80a40 40 0 1 1-80 0 40 40 0 1 1 80 0","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M192 64v256h24.4l147.8-147.8c5.3-5.3 12.4-8.2 19.8-8.2s14.5 3 19.8 8.2L512 280.4V64zm192 167.6L295.6 320h176.8zM128 64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64zm144 40a40 40 0 1 1 0 80 40 40 0 1 1 0-80M64 160v288h384v64H64c-35.3 0-64-28.7-64-64V128h64z"})
  );
}

export default CoreImagesRegularDuo;
