import React from 'react';

export function LanCabinetFiling({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 240H32V64c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32zM0 256v192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64zm352 192c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V272h320zM128 96c-17.7 0-32 14.3-32 32v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-17.7-14.3-32-32-32zm0 256c-17.7 0-32 14.3-32 32v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h128v16c0 8.8 7.2 16 16 16s16-7.2 16-16v-16c0-17.7-14.3-32-32-32z"})
  );
}

export default LanCabinetFiling;
