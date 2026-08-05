import React from 'react';

export function LanBracketsRoundThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M356.4 47.2c-4-2-5.6-6.8-3.6-10.7s6.8-5.6 10.7-3.6c24.9 12.5 61.8 38.3 92.6 75.9s55.8 87.3 55.8 147.3-25 109.7-55.8 147.3c-30.8 37.5-67.7 63.4-92.6 75.9-4 2-8.8.4-10.7-3.6s-.4-8.8 3.6-10.7c23.1-11.5 58.2-36.1 87.4-71.7S496 311.4 496 256.2s-23-101.5-52.2-137.1c-29.2-35.7-64.3-60.2-87.4-71.7zm-200.8 0c-23.1 11.5-58.2 36-87.4 71.7C39 154.5 16 200.7 16 256s23 101.5 52.2 137.1c29.2 35.7 64.3 60.2 87.4 71.7 4 2 5.6 6.8 3.6 10.7s-6.8 5.6-10.7 3.6c-25-12.4-61.9-38.3-92.7-75.8C25 365.7 0 315.9 0 256s25-109.7 55.8-147.3c30.8-37.5 67.7-63.4 92.6-75.9 4-2 8.8-.4 10.7 3.6s.4 8.8-3.6 10.7z"})
  );
}

export default LanBracketsRoundThin;
