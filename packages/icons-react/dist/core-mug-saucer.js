import React from 'react';

export const CoreMugSaucer = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32h400c61.9 0 112 50.1 112 112s-50.1 112-112 112h-16c0 70.7-57.3 128-128 128H192c-70.7 0-128-57.3-128-128zm384 160h16c26.5 0 48-21.5 48-48s-21.5-48-48-48h-16zM128 96v160c0 35.3 28.7 64 64 64h128c35.3 0 64-28.7 64-64V96zm384 320c0 53-43 96-96 96H96c-53 0-96-43-96-96h64c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32z"})
);

export default CoreMugSaucer;
