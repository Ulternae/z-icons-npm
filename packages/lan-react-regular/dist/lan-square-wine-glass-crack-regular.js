import React from 'react';

export function LanSquareWineGlassCrackRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm208 64-32 32 80 64-32-64 48-32-24-48h51.4c11.4 0 20.6 9.2 20.6 20.6V208c0 46.2-32.6 84.7-76 93.9V360h40c11 0 20 9 20 20s-9 20-20 20H164c-11 0-20-9-20-20s9-20 20-20h40v-58.1c-43.4-9.2-76-47.8-76-93.9v-75.4c0-11.4 9.2-20.6 20.6-20.6H184z"})
  );
}

export default LanSquareWineGlassCrackRegular;
