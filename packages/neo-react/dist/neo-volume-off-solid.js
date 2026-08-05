import React from 'react';

export function NeoVolumeOffSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 616 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 273v14c0 22.4 1.1 42.3 4.7 59.2 3.7 17.2 10.5 33.2 23.2 45.9s28.7 19.4 45.9 23.2c15.1 3.3 32.6 4.5 52.2 4.7l58.8 78.4A83.97 83.97 0 0 0 252 532h16.3c35.4 0 69-22.9 77.2-60.4 8.4-38.8 18.6-103.7 18.6-191.6s-10.2-152.8-18.7-191.6C337.3 50.9 303.7 28 268.3 28H252c-26.4 0-51.3 12.4-67.2 33.6L126 140c-19.6.2-37.1 1.4-52.2 4.7-17.2 3.7-33.2 10.5-45.9 23.2S8.4 196.6 4.7 213.8C1.1 230.7 0 250.6 0 273"})
  );
}

export default NeoVolumeOffSolid;
