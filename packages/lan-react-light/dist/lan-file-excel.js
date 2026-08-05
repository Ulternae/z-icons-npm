import React from 'react';

export function LanFileExcel({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32h128v96c0 35.3 28.7 64 64 64h96v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m160 13.3L338.7 160H256c-17.7 0-32-14.3-32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm84.6 262.2c-5.4-7-15.5-8.2-22.5-2.8s-8.2 15.5-2.8 22.5l48.4 62.2-48.4 62.2c-5.4 7-4.2 17 2.8 22.5s17 4.2 22.5-2.8l43.4-55.8 43.4 55.8c5.4 7 15.5 8.2 22.5 2.8s8.2-15.5 2.8-22.5l-48.4-62.2 48.4-62.2c5.4-7 4.2-17-2.8-22.5s-17-4.2-22.5 2.8L192 318z"})
  );
}

export default LanFileExcel;
