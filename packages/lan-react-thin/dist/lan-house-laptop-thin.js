import React from 'react';

export function LanHouseLaptopThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -24.05 640 568.05',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M250.4-21.8c3.1-3 8-3 11.1 0l224 216c3.2 3.1 3.3 8.1.2 11.3s-8.1 3.3-11.3.2L448 180.2v59.7h-16v-75.2L256-5 80 164.7v227.2c0 22.1 17.9 40 40 40h120v16H120c-30.9 0-56-25.1-56-56V180.2l-26.4 25.5c-3.2 3.1-8.2 3-11.3-.2s-3-8.2.2-11.3l224-216zM312 216v24h-8c-2.7 0-5.4.2-8 .5V216c0-8.8-7.2-16-16-16h-48c-8.8 0-16 7.2-16 16v48c0 8.8 7.2 16 16 16h12.7c-2 5-3.5 10.4-4.2 16H232c-17.7 0-32-14.3-32-32v-48c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32m232 88H320c-8.8 0-16 7.2-16 16v160h256V320c0-8.8-7.2-16-16-16m-256 16c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v160h32c8.8 0 16 7.2 16 16 0 26.5-21.5 48-48 48H288c-26.5 0-48-21.5-48-48 0-8.8 7.2-16 16-16h32zm272 176H256c0 17.7 14.3 32 32 32h288c17.7 0 32-14.3 32-32z"})
  );
}

export default LanHouseLaptopThin;
