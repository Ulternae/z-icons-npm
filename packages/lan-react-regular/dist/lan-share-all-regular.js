import React from 'react';

export function LanShareAllRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m370.3 57 151 151-151 151c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l162.4-162.3c12.5-12.5 12.5-32.8 0-45.3L404.3 23c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9zm23 151L272 329.4V264c0-13.3-10.7-24-24-24h-56c-66.2 0-122 44.7-138.8 105.7C50 333.3 48 319.5 48 304c0-70.7 57.3-128 128-128h72c13.3 0 24-10.7 24-24V86.6L393.4 208zM68.7 456.1q6.6-7.65 0 0c1.5 1.3 3 2.5 4.5 3.7 9.2 7.4 22.3 7.1 31.1-.8s10.6-20.9 4.2-30.9c-8.2-12.7-12.5-27.2-12.5-44.2 0-53 43-96 96-96h32v80c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9S224 35.1 224 48v80h-48C78.8 128 0 206.8 0 304c0 77.9 38.6 126.2 68.7 152.1"})
  );
}

export default LanShareAllRegular;
