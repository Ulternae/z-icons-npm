import React from 'react';

export const LanSquareWineGlassCrackSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm64 86.3C128 106 138 96 150.3 96H176l32 64-32 32 80 64-32-64 48-32-32-64h57.7c12.3 0 22.3 10 22.3 22.3V208c0 46.2-32.6 84.7-76 93.9V376h40c11 0 20 9 20 20s-9 20-20 20H164c-11 0-20-9-20-20s9-20 20-20h40v-74.1c-43.4-9.2-76-47.8-76-93.9z"})
);

export default LanSquareWineGlassCrackSolid;
