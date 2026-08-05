import React from 'react';

export function LanSheetPlastic({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 480h128v-96c0-35.3 28.7-64 64-64h96V64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32m160-13.3L338.7 352H256c-17.7 0-32 14.3-32 32zM64 512c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h256c35.3 0 64 28.7 64 64v261.5c0 17-6.7 33.3-18.7 45.3L242.7 493.3c-12 12-28.3 18.7-45.3 18.7zm75.3-404.7-32 32c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l32-32c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6m96 32-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6"})
  );
}

export default LanSheetPlastic;
