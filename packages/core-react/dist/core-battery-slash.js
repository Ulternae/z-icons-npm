import React from 'react';

export function CoreBatterySlash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -45.2 640 602.5',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M621.3 512 576 557.3 18.8 0 64-45.2zM64 135.8V384h248.2l64 64H64c-35.3 0-64-28.7-64-64V128c0-15.7 5.6-30.1 15-41.2zM640 352h-64V160h64zM480 64c35.3 0 64 28.7 64 64v216.2l-64-64V128H327.8l-64-64z"})
  );
}

export default CoreBatterySlash;
