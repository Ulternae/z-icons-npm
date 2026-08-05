import React from 'react';

export function LanKitchenSetRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M240 144a96 96 0 1 0-192 0 96 96 0 1 0 192 0m46 24c-11.4 68.1-70.7 120-142 120C64.5 288 0 223.5 0 144S64.5 0 144 0c71.4 0 130.6 51.9 142 120h66.7c3.8-22.7 23.6-40 47.3-40h96c26.5 0 48 21.5 48 48v32c0 26.5-21.5 48-48 48h-96c-23.8 0-43.5-17.3-47.3-40zM80 144a64 64 0 1 1 128 0 64 64 0 1 1-128 0m296 120c0-13.3 10.7-24 24-24s24 10.7 24 24v8h96c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8v144c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V320h-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h96zm-40 56v144h128V320zM32 336c0-8.8 7.2-16 16-16h128c26.5 0 48 21.5 48 48s-21.5 48-48 48h-16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32zm128 48h16c8.8 0 16-7.2 16-16s-7.2-16-16-16h-16zM0 488c0-13.3 10.7-24 24-24h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24m400-360v32h96v-32z"})
  );
}

export default LanKitchenSetRegular;
