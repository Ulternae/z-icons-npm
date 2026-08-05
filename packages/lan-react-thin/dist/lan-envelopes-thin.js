import React from 'react';

export function LanEnvelopesThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 48c-26.5 0-48 21.5-48 48 0 12.7 5.8 24.7 15.8 32.6l173.4 137.6c20.4 16.2 49.2 16.2 69.6 0l173.4-137.6c10-7.9 15.8-19.9 15.8-32.6 0-26.5-21.5-48-48-48zm-42.2 93.2c-2.1-1.6-4-3.4-5.8-5.3V320c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V135.9c-1.8 1.9-3.8 3.7-5.8 5.3L380.7 278.7c-26.2 20.8-63.3 20.8-89.5 0zM512 32c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM16 136v288c0 22.1 17.9 40 40 40h416c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.9 0-56-25.1-56-56V136c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanEnvelopesThin;
