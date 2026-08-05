import React from 'react';

export function MinaBrandGooglePlay({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"stroke":"currentColor","d":"m10.806 10.786-6.038-6.14V3.48l8.267 5.03zm-6.038 6.165V6.072l5.337 5.429zm0 3.569v-2.14l6.039-6.166 2.848 2.897zm9.764-5.943L11.506 11.5l2.405-2.455L18.769 12z"})
  );
}

export default MinaBrandGooglePlay;
