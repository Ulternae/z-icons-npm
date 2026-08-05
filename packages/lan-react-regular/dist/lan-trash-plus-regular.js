import React from 'react';

export function LanTrashPlusRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 448 528',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M166.2-16c-13.3 0-25.3 8.3-30 20.8L120 48H24C10.7 48 0 58.7 0 72s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24h-96L311.8 4.8c-4.7-12.5-16.6-20.8-30-20.8zM28.7 144l22.9 308.7c2.5 33.4 30.3 59.3 63.8 59.3h217.1c33.5 0 61.3-25.9 63.8-59.3L419.2 144h-48.1l-22.6 305.2c-.6 8.4-7.6 14.8-16 14.8H115.4c-8.4 0-15.3-6.5-16-14.8L76.9 144zM224 192c-13.3 0-24 10.7-24 24v48h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24v-48h48c13.3 0 24-10.7 24-24s-10.7-24-24-24h-48v-48c0-13.3-10.7-24-24-24"})
  );
}

export default LanTrashPlusRegular;
