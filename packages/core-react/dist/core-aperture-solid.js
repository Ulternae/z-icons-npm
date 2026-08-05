import React from 'react';

export function CoreApertureSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m434.1-71.9c-7-17.4-16.6-33.6-28.1-48H242l40.6-70.2c-8.7-1.2-17.5-1.8-26.5-1.8-9.9 0-19.6.8-29.1 2.2L145 208l-40.5-70c-11.3 14.6-20.7 30.8-27.5 48.3l46.9 81.2c.2.3.4.6.5.9l34.4 59.6H78c7 17.4 16.6 33.6 28.1 48h163.5l-40.5 70.2c8.8 1.2 17.8 1.9 26.9 1.9 9.7 0 19.3-.7 28.6-2.1l47.3-81.8.1-.3 34.5-59.8 40.6 70.3c11.4-14.5 20.7-30.7 27.6-48.2l-47.1-81.6c-.2-.4-.4-.7-.6-1l-34.3-59.4H434zm-136.7 0 41.5 71.9-41.5 71.9h-83.1l-41.6-72 41.5-71.9h83.1z"})
  );
}

export default CoreApertureSolid;
