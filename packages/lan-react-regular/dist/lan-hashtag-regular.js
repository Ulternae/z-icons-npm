import React from 'react';

export function LanHashtagRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M226.9 29c2.8-13-5.5-25.7-18.4-28.5S182.7 6 180 18.9L156.6 128H68.5c-13.3 0-24 10.7-24 24s10.7 24 24 24h77.8L112 336H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h77.7l-21.2 99c-2.8 13 5.5 25.7 18.4 28.5s25.7-5.5 28.5-18.4l23.4-109h155.4l-21.2 99c-2.8 13 5.5 25.7 18.4 28.5s25.7-5.5 28.5-18.4l23.4-109h88c13.3 0 24-10.7 24-24s-10.7-24-24-24h-77.7l34.3-160H488c13.3 0 24-10.7 24-24s-10.7-24-24-24h-77.8l21.2-99c2.8-13-5.5-25.7-18.4-28.5S387.2 6 384.4 18.9L361 128H205.6l21.2-99zm-31.5 147h155.4l-34.3 160H161.1z"})
  );
}

export default LanHashtagRegular;
