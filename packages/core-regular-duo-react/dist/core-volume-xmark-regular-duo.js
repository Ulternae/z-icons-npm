import React from 'react';

export function CoreVolumeXmarkRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M64 192v128h74.7l8.5 6.4L256 408V104l-108.8 81.6-8.5 6.4z","opacity":".4"}), React.createElement('path', {"fill":"currentColor","d":"M320 480h-53.3c-13.8 0-27.3-4.5-38.4-12.8l-111-83.2H64C30.9 384 3.6 358.8.3 326.5L0 320V192c0-35.3 28.7-64 64-64h53.3l110.9-83.2c11.2-8.3 24.6-12.8 38.5-12.8H320zM147.2 185.6l-8.5 6.4H64v128h74.7l8.5 6.4L256 408V104zm419.4 29L509.2 272l57.4 57.4-45.2 45.2-57.4-57.4-57.4 57.4-45.2-45.2 57.4-57.4-57.4-57.4 45.2-45.2 57.4 57.4 57.4-57.4z"})
  );
}

export default CoreVolumeXmarkRegularDuo;
