import React from 'react';

export function LanGameConsoleHandheldRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-8.8 0-16 7.2-16 16v352c0 26.5 21.5 48 48 48h192c26.5 0 48-21.5 48-48V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v352c0 53-43 96-96 96H96c-53 0-96-43-96-96zm232 272a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24-24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m-128-24c8.8 0 16 7.2 16 16v16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16H96c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v-16c0-8.8 7.2-16 16-16M112 96h160c8.8 0 16 7.2 16 16v112c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V112c0-8.8 7.2-16 16-16"})
  );
}

export default LanGameConsoleHandheldRegular;
