import React from 'react';

export function LanCalendarCircleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m200-144c13.3 0 24 10.7 24 24v8h64v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v8c26.5 0 48 21.5 48 48v144c0 26.5-21.5 48-48 48H176c-26.5 0-48-21.5-48-48V192c0-26.5 21.5-48 48-48v-8c0-13.3 10.7-24 24-24m136 112v-32H176v32zM176 336h160v-64H176z"})
  );
}

export default LanCalendarCircleRegular;
