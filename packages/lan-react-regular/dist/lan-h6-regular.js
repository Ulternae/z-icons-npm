import React from 'react';

export function LanH6Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 64c13.3 0 24 10.7 24 24v144h128V88c0-13.3 10.7-24 24-24s24 10.7 24 24v336c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H48v144c0 13.3-10.7 24-24 24S0 437.3 0 424V88c0-13.3 10.7-24 24-24m360 48c-26.5 0-48 21.5-48 48v60.8c14.1-8.2 30.5-12.8 48-12.8h32c53 0 96 43 96 96v48c0 53-43 96-96 96h-32c-53 0-96-43-96-96V160c0-53 43-96 96-96h72c13.3 0 24 10.7 24 24s-10.7 24-24 24zm-48 192v48c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48v-48c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48"})
  );
}

export default LanH6Regular;
