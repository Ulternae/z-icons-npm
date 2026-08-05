import React from 'react';

export function LanInhaler({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M415.9 40.2c7.9-24.4 33.6-38.4 58.3-31.6L589 39.9c26 7.1 41.1 34.3 33.3 60.1L522.1 434.4C514 461.5 489 480 460.8 480H272.5c-26.5 0-48-21.5-48-48V272c0-26.5 21.5-48 48-48h84.3zm49.9-.7c-8.3-2.3-16.8 2.4-19.4 10.5l-20.8 64.6 1.5 1.4 124 110.2 40.6-135.4c2.6-8.6-2.4-17.7-11.1-20zM541 260.1 414.9 148l-31.2 96.9c-2.1 6.6-8.3 11.1-15.2 11.1h-96c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h188.3c14.1 0 26.6-9.3 30.6-22.8zM32.5 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48m24 120a24 24 0 1 1-48 0 24 24 0 1 1 48 0m72-168a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-72-24a24 24 0 1 1-48 0 24 24 0 1 1 48 0m72 120a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanInhaler;
