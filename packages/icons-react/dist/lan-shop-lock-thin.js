import React from 'react';

export const LanShopLockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M92.6 74.5 35.8 188.2c-2.5 5-3.8 10.4-3.8 16C32 224 48 240 67.8 240h349.4c-.7 5.2-1.1 10.6-1.1 16h-64v176c0 26.5-21.5 48-48 48h-192c-26.5 0-48-21.5-48-48V255.9c-26.8-1.9-48-24.3-48-51.6 0-8 1.9-16 5.5-23.2L78.3 67.4c10.9-21.7 33-35.4 57.3-35.4h304.9c24.2 0 46.4 13.7 57.2 35.4l38.5 76.9c-5.1-.4-11.2-.4-17.8.1l-35-69.9c-8.2-16.2-24.8-26.5-43-26.5H135.6c-18.2 0-34.8 10.3-42.9 26.5zM80 368h256V256H80zm0 16v48c0 17.7 14.3 32 32 32h192c17.7 0 32-14.3 32-32v-48zm496-127.9c0-26.5-21.5-48-48-48s-48 21.5-48 48V320h96zM432 368v96c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32v.1H464v-.1c-17.7 0-32 14.3-32 32m160-111.9V320c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48v-63.9c0-35.3 28.7-64 64-64s64 28.7 64 64"})
);

export default LanShopLockThin;
