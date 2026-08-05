import React from 'react';

export function LanRampLoadingThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v340.7l-16-32V64c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v308.7l-16 32zm372.4 424.8c5.3 10.6-2.4 23.2-14.3 23.2H25.9c-11.9 0-19.6-12.5-14.3-23.2L16 480l71.2-142.3c5.4-10.8 16.5-17.7 28.6-17.7h152.4c12.1 0 23.2 6.8 28.6 17.7L368 480zm-14.3 7.2-75.6-151.2c-2.7-5.4-8.2-8.8-14.3-8.8H115.8c-6.1 0-11.6 3.4-14.3 8.8L25.9 496z"})
  );
}

export default LanRampLoadingThin;
