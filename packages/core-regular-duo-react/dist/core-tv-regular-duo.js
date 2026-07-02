import React from 'react';

export function CoreTvRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M64 64v256h384V64z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M448 512H64v-64h384zm0-512c35.3 0 64 28.7 64 64v256l-.3 6.5c-3.3 32.3-30.6 57.5-63.7 57.5H64C30.9 384 3.6 358.8.3 326.5L0 320V64C0 28.7 28.7 0 64 0zM64 320h384V64H64z"})
  );
}

export default CoreTvRegularDuo;
