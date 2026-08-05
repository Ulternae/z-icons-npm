import React from 'react';

export function MinaLightningOff({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M7 13.143a.506.506 0 0 1-.461-.702l3.907-9.128a.5.5 0 0 1 .46-.313h4.518c.353 0 .594.36.465.694l-.352.903m-1.6 5.465L21 3m-7.062 7.062a.5.5 0 0 0 .19.038H17c.412 0 .647.479.398.813l-7.47 10.046c-.062.083-.191.03-.18-.072l.816-7.179a.5.5 0 0 0-.03-.242m3.404-3.404-3.404 3.404M3 21l7.534-7.534"})
  );
}

export default MinaLightningOff;
