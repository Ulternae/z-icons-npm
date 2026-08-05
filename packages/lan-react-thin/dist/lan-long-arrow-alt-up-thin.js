import React from 'react';

export function LanLongArrowAltUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-0.052 -31.975 320.13 576.075',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M171.3-11.3c-6.2-6.2-16.4-6.2-22.6 0l-128 128c-4.6 4.6-5.9 11.5-3.5 17.4S25.5 144 32 144h72c4.4 0 8 3.6 8 8v344c0 17.7 14.3 32 32 32h32c17.7 0 32-14.3 32-32V152c0-4.4 3.6-8 8-8h72c6.5 0 12.3-3.9 14.8-9.9s1.1-12.9-3.5-17.4zm-33.9-11.3c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9S301 160.1 288 160.1h-64v336c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48v-336H32c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.8 7-34.9z"})
  );
}

export default LanLongArrowAltUpThin;
