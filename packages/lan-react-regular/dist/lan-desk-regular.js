import React from 'react';

export function LanDeskRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M528 64c26.5 0 48 21.5 48 48v48c0 20.9-13.4 38.6-32 45.2V424c0 13.3-10.7 24-24 24s-24-10.7-24-24v-24H304v24c0 13.3-10.7 24-24 24s-24-10.7-24-24V208H80v216c0 13.3-10.7 24-24 24s-24-10.7-24-24V205.2C13.4 198.6 0 180.9 0 160v-48c0-24.9 18.9-45.3 43.1-47.8L48 64zM304 208v144h192V208zm120 48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24zM48 160h480v-48H48z"})
  );
}

export default LanDeskRegular;
