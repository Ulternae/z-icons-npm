import React from 'react';

export function CoreCompassRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m80 112 24.5-146.9c4.2-25.3 23-45.4 47.6-51.6l5-1L368 144l-24.5 146.9c-4.5 27-25.6 48.1-52.6 52.6z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m87.5 226.9c-4.5 27-25.6 48.1-52.6 52.6L144 368l24.5-146.9c4.2-25.3 23-45.4 47.6-51.6l5-1L368 144zm-113.2-67.2c-3.4.6-6 3.2-6.6 6.6l-11.6 69.5 69.6-11.6c3.4-.6 6-3.2 6.6-6.6l11.6-69.6-69.5 11.6z"})
  );
}

export default CoreCompassRegularDuo;
