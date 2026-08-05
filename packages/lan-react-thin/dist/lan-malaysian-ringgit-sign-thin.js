import React from 'react';

export function LanMalaysianRinggitSignThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 440c0 4.4 3.6 8 8 8s8-3.6 8-8V98l121.4 178.5c1.5 2.2 4 3.5 6.6 3.5s5.1-1.3 6.6-3.5L560 98v342c0 4.4 3.6 8 8 8s8-3.6 8-8V72c0-3.5-2.3-6.6-5.6-7.6s-7 .2-9 3.1L432 257.8 302.6 67.5c-2-2.9-5.6-4.2-9-3.1S288 68.5 288 72zM0 72v368c0 4.4 3.6 8 8 8s8-3.6 8-8V304h122.2l46.2 138.6c1.4 4.2 5.9 6.5 10.1 5.1s6.5-5.9 5.1-10.1l-45-134.9C212.1 293.6 256 243.9 256 184c0-66.3-53.7-120-120-120H8c-4.4 0-8 3.6-8 8m16 216V80h120c57.4 0 104 46.6 104 104s-46.6 104-104 104z"})
  );
}

export default LanMalaysianRinggitSignThin;
