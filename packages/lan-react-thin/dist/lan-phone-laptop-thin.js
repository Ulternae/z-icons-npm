import React from 'react';

export function LanPhoneLaptopThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 16c-26.5 0-48 21.5-48 48v192h192v16H19.2c-1.8 0-3.2 1.4-3.2 3.2 0 33.6 27.2 60.8 60.8 60.8H272v16H76.8C34.4 352 0 317.6 0 275.2 0 264.6 8.6 256 19.2 256H64V64c0-35.3 28.7-64 64-64h288c35.3 0 64 28.7 64 64v48h-16V64c0-26.5-21.5-48-48-48zm256 480h96c26.5 0 48-21.5 48-48V224c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48m0-336h96c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64h-96c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64m16 280c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8s-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8"})
  );
}

export default LanPhoneLaptopThin;
