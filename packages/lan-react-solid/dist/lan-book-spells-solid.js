import React from 'react';

export function LanBookSpellsSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 512H96c-53 0-96-43-96-96V96C0 43 43 0 96 0h304c26.5 0 48 21.5 48 48v288c0 20.9-13.4 38.7-32 45.3V448c17.7 0 32 14.3 32 32s-14.3 32-32 32zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32h256v-64zm163.2-188.8-46.6 20c-7.8 3.3-7.8 14.3 0 17.6l46.6 20 20 46.6c3.3 7.8 14.3 7.8 17.6 0l20-46.6 46.6-20c7.8-3.3 7.8-14.3 0-17.6l-46.6-20-20-46.6c-3.3-7.8-14.3-7.8-17.6 0zM150.5 83.1l-11.8 23.6-23.6 11.8c-7.9 3.9-7.9 15.2 0 19.1l23.6 11.8 11.8 23.6c3.9 7.9 15.2 7.9 19.1 0l11.8-23.6 23.6-11.8c7.9-3.9 7.9-15.2 0-19.1l-23.6-11.8-11.8-23.6c-3.9-7.9-15.2-7.9-19.1 0"})
  );
}

export default LanBookSpellsSolid;
