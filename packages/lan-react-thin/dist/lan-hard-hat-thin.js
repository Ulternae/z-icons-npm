import React from 'react';

export function LanHardHatThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 48c26.5 0 48 21.5 48 48v288H224V96c0-26.5 21.5-48 48-48zm64 336V96c0-3.7-.3-7.3-.9-10.9 94.2 21.1 159.8 104.4 160.9 203V384zm176 2.7V288c-1.2-109-76.1-201.2-182.6-220.3C350.9 46.5 329.2 32 304 32h-32c-25.1 0-46.9 14.5-57.4 35.6C107.9 86.6 32 178 32 288v98.7C13.4 393.3 0 411.1 0 432c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48 0-20.9-13.4-38.7-32-45.3M48 384v-96c0-99.3 66.3-182.1 160.9-202.9-.6 3.6-.9 7.2-.9 10.9v288zm0 16h480c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32s14.3-32 32-32"})
  );
}

export default LanHardHatThin;
