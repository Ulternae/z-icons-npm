import React from 'react';

export function CoreFeather({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M303.5 64c-17.9 0-35.4 3.8-51.5 10.8v139.9l77.4-77.4 45.3 45.3-77.4 77.4h139.9c7.1-16.1 10.8-33.6 10.8-51.5V192c0-70.7-57.3-128-128-128zM196 118.5l-68 68v152.2l68-68zM241.3 316l-68 68h152.2l68-68zM64 402.7V160L167.8 56.2c36-36 84.8-56.2 135.7-56.2H320c106 0 192 86 192 192v16.5c0 50.9-20.2 99.8-56.2 135.8L352 448H109.3l-54.7 54.6-45.2-45.2z"})
  );
}

export default CoreFeather;
