import React from 'react';

export function LanBarProgressRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M336 144v224h112c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zm-48 0h-46.1L48 337.9V352c0 8.8 7.2 16 16 16h46.1L288 190.1zm0 113.9L177.9 368H288zM64 144c-8.8 0-16 7.2-16 16v110l126-126zM0 160c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v192c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
  );
}

export default LanBarProgressRegular;
