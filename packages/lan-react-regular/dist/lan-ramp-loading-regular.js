import React from 'react';

export function LanRampLoadingRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v340.7l-48-96V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v244.7l-48 96zm336 352 36.4 72.8c.1.3.2.5.4.8 4.6 10.5-3.1 22.4-14.7 22.4H25.9c-11.6 0-19.3-11.9-14.7-22.4.1-.3.2-.5.4-.8 23.8-47.7 49-98 75.6-151.2 5.4-10.8 16.5-17.7 28.6-17.7h152.4c12.1 0 23.2 6.8 28.6 17.7zM77.7 464h228.7l-48-96H125.7z"})
  );
}

export default LanRampLoadingRegular;
