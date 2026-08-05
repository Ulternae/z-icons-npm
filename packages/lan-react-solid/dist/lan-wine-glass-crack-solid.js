import React from 'react';

export function LanWineGlassCrackSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 0C48.7 0 35.6 10.8 32.6 25.7L3.2 173C1.1 183.5 0 194.2 0 205v3c0 77.4 55 142 128 156.8V480H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h192c17.7 0 32-14.3 32-32s-14.3-32-32-32h-64V364.8C265 350 320 285.4 320 208v-3c0-10.7-1.1-21.4-3.2-32L287.4 25.7C284.4 10.8 271.3 0 256 0h-48l22.7 45.5c5.3 10.6 2 23.6-7.7 30.4L160 120l35.6 92.6c2.1 5.5-1.9 11.4-7.8 11.4-2.4 0-4.7-1.1-6.3-2.9L98.2 125c-9.6-11.1-7.1-28.1 5.3-36L168 48 136 0z"})
  );
}

export default LanWineGlassCrackSolid;
