import React from 'react';

export const LanPenFancySlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L349.9 284l167-145.5c17.2-15 27.1-36.7 27.1-59.6 0-43.6-35.4-79-79-79-22.8 0-44.6 9.9-59.6 27.1L260 194.1zm77.9 301c-17.1 3.9-30.7 16.9-35.4 33.8L35.9 479.7l92.3-92.3c-.1-1.2-.2-2.3-.2-3.5 0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32c-1.2 0-2.4-.1-3.5-.2l-92.3 92.4L234 460.5c16.9-4.7 29.9-18.3 33.8-35.4l16.4-71-94.3-94.3-71 16.4z"})
);

export default LanPenFancySlashSolid;
