import React from 'react';

export function LanArrowLeftArrowRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m372.7 484.7 84.7-84.7H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h441.4l-84.7-84.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l112 112c6.2 6.2 6.2 16.4 0 22.6l-112 112c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6m-233.4-256c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-112-112c-6.2-6.2-6.2-16.4 0-22.6l112-112c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6L54.6 112H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H54.6z"})
  );
}

export default LanArrowLeftArrowRight;
