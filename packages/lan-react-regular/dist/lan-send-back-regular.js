import React from 'react';

export function LanSendBackRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 576 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 16c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V32c0-8.8 7.2-16 16-16zM64-32C28.7-32 0-3.3 0 32v96c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64V32c0-35.3-28.7-64-64-64zm448 400c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16zm-96-48c-35.3 0-64 28.7-64 64v96c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64zm-288-80v112c0 35.3 28.7 64 64 64h112v-32c0-61.9 50.1-112 112-112h32V160c0-35.3-28.7-64-64-64H272v32c0 61.9-50.1 112-112 112z"})
  );
}

export default LanSendBackRegular;
