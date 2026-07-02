import React from 'react';

export function CoreLockRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M64 256h256v192H64z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M128 192h128v-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zm-64 0v-64C64 57.3 121.3 0 192 0s128 57.3 128 128v64c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64m256 64H64v192h256z"})
  );
}

export default CoreLockRegularDuo;
