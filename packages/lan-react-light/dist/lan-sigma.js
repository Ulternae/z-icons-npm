import React from 'react';

export function LanSigma({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M1.3 41.6C3.9 35.8 9.6 32 16 32h328c22.1 0 40 17.9 40 40v72c0 8.8-7.2 16-16 16s-16-7.2-16-16V72c0-4.4-3.6-8-8-8H52.5l167.3 181.1c5.7 6.1 5.7 15.6 0 21.7L52.5 448H344c4.4 0 8-3.6 8-8v-72c0-8.8 7.2-16 16-16s16 7.2 16 16v72c0 22.1-17.9 40-40 40H16c-6.4 0-12.1-3.8-14.7-9.6s-1.4-12.6 2.9-17.3l182-197.1L4.2 58.9c-4.3-4.7-5.4-11.5-2.9-17.3"})
  );
}

export default LanSigma;
